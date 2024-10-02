const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
  "Here we go again...",
  "One does not simply commit without testing",
  "Another bug, another day",
  "May the bugs be ever in your favor",
  "404: Commit message not found",
  "I swear it worked on my machine",
  "Compiling... or was it crashing?",
  "Code so clean, you could eat off it",
  "This is fine. Everything is fine.",
  "There is no spoon... or is there?",
  "Gone to lunch. Hopefully the code works.",
  "Just adding some more semicolons",
  "Ctrl+C, Ctrl+V level coding",
  "Echoes in the repository...",
  "Merge conflict survivor",
  "Too many tabs, not enough time",
  "It’s not a bug, it’s a feature!",
  "Temporary fix, permanent problem",
  "Half commit, half delete",
  "Ninja commit, no one saw it coming",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};
