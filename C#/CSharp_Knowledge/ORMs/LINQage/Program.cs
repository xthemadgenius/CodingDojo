using System;
using System.Linq;
using System.Collections.Generic;

namespace LINQage
{
    class User
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public User(string name, int age)
        {
            Name = name;
            Age = age;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            List<string> myList = new List<string>()
            {
                "fest1",
                "best2",
                "sest3",
                "zest4",
                "test5",
                "aest6",
                "nest7",
                "rest8",
                "hest9",
                "pest10",
                "mest11",
                "kest12",
                "iest13",
                "gest14",
                "jest15",
                "xest16",
                "qest17",
                "test18",
                "lest19",
                "west20",
                "oest21",
                "yest22"
            };
            // foreach(var item in myList)

            // Query for and return a list of all strings that are 5 characters long
            List<string> fiveLong = myList.Where(s => s.Length == 5).ToList();

            // Get me them in order
            List<string> ordered = myList.OrderBy(s => s).ToList();

            // Query for returning a SINGLE item from a collection
            string oneResult = myList.FirstOrDefault(s => s == "test19");

            // Query for 6 character long strings in order
            List<string> SixAlph = myList
                .Where(s => s.Length == 6)
                .OrderBy(s => s)
                .ToList();

            // Query for returning a boolean regarding whether or not something exists given a specific condition
            bool nineLong = myList.Any(s => s.Length == 9);

            // Query for returning all strings that contain a 2
            string[] withTwo = myList.Where(s => s.Contains("t2")).ToArray();

            // Query for returning a boolean that represents whether a certain condition is met by ALL items in a collection
            bool startsWithT = myList.All(s => s[0] == 't');

            List<User> AllUsers = new List<User>()
            {
                new User("Cody", 29),
                new User("George", 26),
                new User("Bryanna", 29),
                new User("Bill", 52)
            };

            // Query for all users younger than 29 years old
            List<User> LittleChildren = AllUsers.Where(u => u.Age < 29).ToList();

            // Query to return just the names of all the users in our list
            List<string> UserNames = AllUsers.Select(u => u.Name).ToList();

            // Query to return a list of the names of the users that are 29
            List<string> TwentyNineYearOlds = AllUsers
                .Where(u => u.Age == 29)
                .Select(u => u.Name)
                .ToList();

            // Query to return the youngest user from our list
            int YoungestAge = AllUsers.Min(u => u.Age);
            User Youngest = AllUsers.FirstOrDefault(u => u.Age == YoungestAge);

            // // Even though you can do this, just don't vv
            // User YoungestCondense = AllUsers.FirstOrDefault(u => u.Age == AllUsers.Min(a => a.Age));

            // Order the users from oldest to youngest

            List<User> Old2Yung = AllUsers
                .OrderByDescending(u => u.Age)
                .ThenBy(u => u.Name)
                .ToList();
        }
    }
}
