using System;

namespace WizardNinjaSamurai
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard merlin = new Wizard("Merlin");
            Ninja pain = new Ninja("Nagato");
            Samurai inyuasha = new Samurai("Inyuasha");

            inyuasha.Attack(pain);
            inyuasha.Attack(pain);

            merlin.Heal(pain);
            merlin.Heal(pain);
            merlin.Heal(pain);

            pain.Attack(inyuasha);
            pain.Attack(inyuasha);
            pain.Steal(inyuasha);
            inyuasha.Meditate();
        }
    }
}
