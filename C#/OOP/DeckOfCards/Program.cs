using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck deck = new Deck();
            deck.Shuffle();
            Player player = new Player("Debo");
            Console.WriteLine(player.Name);
            for(int i = 0; i < 6; i ++)
            {
                player.Draw(deck);
            }
            foreach(var card in player.Hand)
            {
                card.SayCard();
            }
            player.Discard(3);
            Console.WriteLine("Discarded a card");
            foreach(var card in player.Hand)
            {
                card.SayCard();
            }
        }
    }
}
