module.exports = {
  format_date: (date) => {
    // https://flaviocopes.com/how-to-format-date-javascript/
    return date.toDateString();
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
  format_url: (id) => {
    return `/post/${id}`;
  }
}