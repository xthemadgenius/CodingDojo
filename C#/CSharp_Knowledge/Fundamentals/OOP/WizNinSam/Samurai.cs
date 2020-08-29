using System;

namespace WizNinSam
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            maxHP = 200;
            Health = maxHP;
        }

        public Samurai(string name, int str, int intel, int dex, int hp) : base(name,str,intel,dex,hp)
        {}

        public override int Attack(Human target)
        {
            int remaining = base.Attack(target);

            if(remaining < 50)
            {
                target.Health = 0;
                System.Console.WriteLine($"omae wa mo shinderu");
            }
            return target.Health;
        }
        
        public void Meditate()
        {
            Health = MaxHP;
            System.Console.WriteLine($"{Name} meditated, restoring their health to full.");
        }
    }
}