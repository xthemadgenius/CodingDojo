using System;

namespace TerminalRPGEncounter
{
    class Enemy
    {
        public string Name;
        public int health;
        public Enemy(string name, int healthPoints)
        {
            Name = name;
            health = healthPoints;
        }
    }
}