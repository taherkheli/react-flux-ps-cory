using framework.selenium;
using framework.types;
using OpenQA.Selenium;

namespace framework.navigation
{
  public static class MainMenu
  {
    public static void GoTo(MainMenuItem item)
    {
      switch (item)
      {
        case (MainMenuItem.Home):
        break;

        case (MainMenuItem.Authors):
          Driver.Instance.FindElement(By.Id("authors")).Click();
          //Driver.Instance.Navigate().GoToUrl(Driver.BaseAddress + "authors");  //method 2
          break;
        
        case (MainMenuItem.About):
        break;

        default:
        break;
      }
    }

  }
}
