export default (word, progress = "") => ({
  word,
  progress,
  remaining: word.slice(progress.length)
})
