const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  console.log(req.body.name);

  let prompt = `Artist: ${req.search}\n\nLyrics:\n`;
  const gptResponse = await openai.complete({
    engine: "davinci",
    prompt: prompt,
    maxTokens: 50,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1,
  });

  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` });
};

// const spawn = require("child_process").spawn;

// const process = spawn("python", [
//   "./gpt_sql.py",
//   "Display the lowest salary from the Worker table",
// ]);

// process.stdout.on("data", (data) => {
//   console.log(data.toString());
// });
