using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //int Integer = 100;
            //Console.WriteLine(Integer);


            //string STRING_VARIABLE = "HELLO WORLD";
            //Console.WriteLine(STRING_VARIABLE);
            //Console.ReadLine();

            //string input = Console.ReadLine();
            
            //Console.WriteLine(input);
            //Console.ReadLine();

            //int input2 = Convert.ToInt16(Console.ReadLine());
            //int input2 = Convert.ToInt16(Console.ReadLine());
            //Console.WriteLine(input2);
            //Console.ReadLine();

            //Console.Write("Please Enter an Employee Age : ");
            //int age = Convert.ToInt32(Console.ReadLine());
            //if (age >= 18 && age < 58)
            //    Console.WriteLine("Eligible to work");
            //else if (age == 59)
            //    Console.WriteLine("You just missed it one year ago");
            //else
            //    Console.WriteLine("Not Eligible");

            //Console.Write("Enter table start");
            //int table_start = Convert.ToInt32(Console.ReadLine());
            //Console.Write("Enter table end");
            //int table_end = Convert.ToInt32(Console.ReadLine());

            //for (int j = table_start; j <= table_end; j++)
            //{

            //    for (int i = 0; i <= 10; i++)
            //    {
            //        Console.WriteLine("{0} x {1} = {2}", j, i, j * i);

            //    }
            //}

            //int num = 1;
            //while (num < 11)
            //{
            //    Console.WriteLine(num);
            //    num++;
            //}

            //int size = 5;
            //int[] intarray = new int[size];
            //for (int i = 0; i < size; i++)
            //{
            //    Console.WriteLine("Enter Value at {0}", i);
            //    int input = Convert.ToInt32(Console.ReadLine());

            //    intarray[i] = input;
            //}
            //int sum = 0;
            //for (int j = 0; j<intarray.Length; j++)
            //{
            //    sum = sum + intarray[j];
            //}
            //Console.WriteLine("The sum of the values in array is : " +sum);

            //    Console.ReadLine();

            // ------------------------- LAB TASK - 1 -------------------------//
            Console.Write("Enter radius of circle:");
            int radius = Convert.ToInt32(Console.ReadLine());
            float pi = 3.142f;

            float res = pi * (radius * radius);
            Console.WriteLine("The radius of circle is: {0}", res);

            //Area of Triangle
            Console.Write("Enter base:");
            double tbase = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter height:");
            double theight = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("The area of triangle is:{0}",(tbase * theight * .5));

            Console.ReadLine();







        }

    }
}
