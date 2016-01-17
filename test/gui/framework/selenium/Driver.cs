using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace framework.selenium
{
  public class Driver
  {
    private static IWebDriver _instance;

    private Driver()  //private constructor
    {
    }

    public static IWebDriver Instance
    {
      get
      {
        if (_instance == null)
        {
          _instance = new ChromeDriver(@"..\..\..\packages\ext\");
        }
        return _instance;
      }
    }

    public static void Initialize()
    {
      Instance.Manage().Window.Maximize();
      Instance.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(3));  //set implicit timeout to 3 seconds
      Instance.Navigate().GoToUrl(BaseAddress);
    }

    public static void Close()
    {
      Instance.Close();
    }

    public static string BaseAddress
    {
      get { return "http://localhost:9005/#/"; }
    }
  }
}


//thread safe

//public sealed class Singleton
//{
//   private static volatile Singleton instance;
//   private static object syncRoot = new Object();

//   private Singleton() {}

//   public static Singleton Instance
//   {
//      get 
//      {
//         if (instance == null) 
//         {
//            lock (syncRoot) 
//            {
//               if (instance == null) 
//                  instance = new Singleton();
//            }
//         }

//         return instance;
//      }
//   }
//}