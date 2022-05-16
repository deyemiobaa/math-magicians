import React from 'react';

class QuoteBody extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Pure mathematics is, in its way, the poetry of logical ideas.',
      source: 'Albert Einstein',
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    const quotes = [
      {
        text: 'A man is like a fraction whose numerator is what he is and whose denominator is what he thinks of himself. The larger the denominator, the smaller the fraction.',
        source: 'Leo Tolstoy',
      },
      {
        text: 'Physics is mathematical not because we know so much about the physical world, but because we know so little; it is only its mathematical properties that we can discover.',
        source: 'Bertrand Russell',
      },
      {
        text: 'Mathematics is a logical method. . . . Mathematical propositions express no thoughts. In life it is never a mathematical proposition which we need, but we use mathematical propositions only in order to infer from propositions which do not belong to mathematics to others which equally do not belong to mathematics.',
        source: 'Ludwig Wittgenstein',
      },
      {
        text: 'It has become almost a cliché to remark that nobody boasts of ignorance of literature, but it is socially acceptable to boast ignorance of science and proudly claim incompetence in mathematics.',
        source: 'Richard Dawkins',
      },
      {
        text: 'The hardest arithmetic to master is that which enables us to count our blessings',
        source: 'Eric Hoffer',
      },
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      text: randomQuote.text,
      source: randomQuote.source,
    });
  }

  render() {
    const { text, source } = this.state;
    return (
      <div className="home-text">
        <p className="quotes">
          {text}
        </p>
        <p className="quote-source source">
          {source}
        </p>
        <button
          className="quote-button"
          type="button"
          onClick={() => this.changeQuote()}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default QuoteBody;
