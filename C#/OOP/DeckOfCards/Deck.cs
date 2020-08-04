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
            get {return this.cards;}
        }

        public void ShowDeck()
        {
            foreach (Card play in cards)
            {
                play.SayCard();
            }
        }

        public Card Deal()
        {
            Card theCard = cards[0];
            cards.RemoveAt(0);
            return theCard;
        }

        public void Shuffle()
        {
            List<Card> cards2shuffle = this.cards;
            List<Card> shuffled = new List<Card>();
            Random rand = new Random();
            while(cards2shuffle.Count > 0)
            {
                int idx = rand.Next(cards2shuffle.Count);
                shuffled.Add(cards2shuffle[idx]);
                cards2shuffle.RemoveAt(idx);
            }
            this.cards = shuffled;
        }
    }
}