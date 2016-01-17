using framework.selenium;
using framework.types;
using OpenQA.Selenium;

namespace framework.pages
{
  public class AuthorsPage
  {

    public static Result CreateAuthor(string firstName, string lastName)
    {
      Result result = Result.Fail;
      Driver.Instance.FindElement(By.Id("addAuthor")).Click();
      Driver.Instance.FindElement(By.Name("firstName")).SendKeys(firstName);
      Driver.Instance.FindElement(By.Name("lastName")).SendKeys(lastName);
      Driver.Instance.FindElement(By.Id("saveBtn")).Click();
      if (AuthorExists(firstName + " " + lastName))
        result = Result.OK;
      return result;
    }

    public static Result Delete(string name)
    {
      Result result = Result.Fail;
      var rows = Driver.Instance.FindElements(By.TagName("tr"));

      foreach (var row in rows)
      {
        if (row.Text.Contains(name))
        {
          row.FindElement(By.LinkText("Delete")).Click();
          result = Result.OK;
          break;
        }
      }

      return result;
    }

    private static bool AuthorExists(string name)
    {
      bool found = false;

      var rows = Driver.Instance.FindElements(By.TagName("tr"));
      foreach (var row in rows)
      {
        if (row.Text.Contains(name))
        {
          found = true;
          break;
        }
      }

      return found;
    }
  }
}
