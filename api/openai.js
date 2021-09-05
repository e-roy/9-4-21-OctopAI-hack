export default async (req, res) => {
  console.log(req.body.name);

  //   let prompt = `Artist: ${req.search}\n\nLyrics:\n`;
  //   const gptResponse = await openai.complete({
  //     engine: "davinci",
  //     prompt: prompt,
  //     maxTokens: 50,
  //     temperature: 0.7,
  //     topP: 1,
  //     presencePenalty: 0,
  //     frequencyPenalty: 0.5,
  //     bestOf: 1,
  //     n: 1,
  //   });

  res.status(200).json({ text: `testing return` });
};
