using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using framework;
using framework.selenium;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
  public class AppTestBase
  {
    [TestInitialize]
    public void Init()
    {
      Driver.Initialize();
    }

    [TestCleanup]
    public void Cleanup()
    {
      Driver.Close();
    }
  }
}
