using framework.navigation;
using framework.pages;
using framework.types;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
  [TestClass]
  public class AuthorsTest: AppTestBase
  {

    [TestMethod]
    public void AuthorsCanBeCreatedAndDeleted()
    {
      MainMenu.GoTo(MainMenuItem.Authors);

      for (int j = 0; j < 3; j++)
      {
        for (int i = 0; i < 5; i++)
        {
          var result = AuthorsPage.CreateAuthor("Test", "User" + (i + 1).ToString());
          Assert.AreEqual(result, Result.OK);
        }

        for (int i = 0; i < 5; i++)
        {
          var result = AuthorsPage.Delete("Test User" + (i + 1).ToString());
          Assert.AreEqual(result, Result.OK);
        }
      }
      }
  }
}
