using System;

namespace SinglyLinkedLists
{
    public class SllNode
    {
        public int Value;
        public SllNode Next;
        public SllNode(int value) 
        {
            this.Value = value;
            this.Next = null;
        }
    }
}