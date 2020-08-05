using System;

namespace Phone
{
    public class Galaxy : Phone, IRingable 
    {
        bool isUnlocked;
        string silent = "ZZZ ZZZ ZZZ";
        public Galaxy(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
            : base(versionNumber, batteryPercentage, carrier, ringTone) {
                isUnlocked = false;
            }
        public string Ring() 
        {
            return (isUnlocked) ? RingTone : silent;
        }
        public string Unlock() 
        {
            isUnlocked = true;
            return "Unlocked with Passcode";
        }
        public override void DisplayInfo() 
        {
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$$");
            Console.WriteLine($"Galaxy: {VersionNumber}");
            Console.WriteLine($"Carrier: {Carrier}");
            Console.WriteLine($"Battery: {BatteryPercentage}");
            Console.WriteLine($"Ring Tone: {RingTone}");
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$$");
        }
    }
}