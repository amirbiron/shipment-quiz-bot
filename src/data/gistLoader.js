import https from 'https';

/**
 * Fetches quiz data (categories + questions) from a GitHub Gist.
 * Expects the gist to export `categories` and `questions` in JS module format.
 */
export async function loadQuestionsFromGist(gistId) {
  const apiUrl = `https://api.github.com/gists/${gistId}`;
  const raw = await fetchJSON(apiUrl);

  // Find the questions file in the gist
  const files = Object.values(raw.files);
  const questionsFile = files.find(f => f.filename.includes('questions'));
  if (!questionsFile) {
    throw new Error(`No questions file found in gist ${gistId}`);
  }

  // If content is truncated, fetch from raw_url
  let content = questionsFile.content;
  if (questionsFile.truncated && questionsFile.raw_url) {
    content = await fetchText(questionsFile.raw_url);
  }

  return parseQuestionsJS(content);
}

/**
 * Parses a JS module string that exports `categories` and `questions`.
 * Strips export keywords and evaluates the data structures.
 */
function parseQuestionsJS(jsContent) {
  // Remove 'export' keywords so we can evaluate the objects
  let code = jsContent
    .replace(/export\s+const\s+/g, 'const ')
    .replace(/export\s+/g, '');

  // Use Function constructor to safely evaluate the JS objects
  const fn = new Function(`
    ${code}
    return { categories, questions };
  `);

  const result = fn();

  // Normalize question types: 'boolean' -> 'truefalse'
  result.questions = result.questions.map(q => ({
    ...q,
    type: q.type === 'boolean' ? 'truefalse' : q.type
  }));

  return result;
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: { 'User-Agent': 'shipment-quiz-bot' }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON from ${url}: ${e.message}`));
        }
      });
    }).on('error', reject);
  });
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: { 'User-Agent': 'shipment-quiz-bot' }
    };
    https.get(url, options, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}
