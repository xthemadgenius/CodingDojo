using System; 
using System.Collections.Generic;

namespace DeckOfCards
{
    class Deck
    {
        public List<Card> cards = new List<Card>();
        public Deck()
        {
            Reset();
        }

        public List<Card> Reset()
        {
            cards.Clear();
            for(int i = 0; i < 4; i++)
            {
                int x = 1;
                while(x < 14)
                {
                    cards.Add(new Card(Card.Suits[i], x));
                    x++;
                }
            }
            return cards;
        }
        public List<Card> Cards
        {
            get {return this.cards};
        }
    }
}