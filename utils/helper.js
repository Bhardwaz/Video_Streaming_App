export function makeRandomMessage() {
  const topics = [
    "world",
    "technology",
    "nature",
    "sports",
    "music",
    "food",
    "travel",
    "books",
    "movies",
    "art",
    "Economics",
    "Global Warming",
    "Indian",
    "Indian tourist places",
    "Joon Web",
  ];

  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const messages = [
    `Let's talk about ${randomTopic}.`,
    `What are your thoughts on ${randomTopic}?`,
    `I recently read an interesting article about ${randomTopic}.`,
    `Have you tried any new ${randomTopic} recipes?`,
    `I'm planning a trip to explore ${randomTopic}. Any recommendations?`,
    `Did you watch any good ${randomTopic} movies lately?`,
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
