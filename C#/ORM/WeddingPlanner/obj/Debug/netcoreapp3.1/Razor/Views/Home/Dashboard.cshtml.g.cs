#pragma checksum "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "202834e1d0b98e76a19d6b6e424a862aca1b2134"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(MyApp.Namespace.Home.Views_Home_Dashboard), @"mvc.1.0.view", @"/Views/Home/Dashboard.cshtml")]
namespace MyApp.Namespace.Home
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
using WeddingPlanner.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"202834e1d0b98e76a19d6b6e424a862aca1b2134", @"/Views/Home/Dashboard.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fc1d1eb37dc6f0d82250bf784d7ea6a0b75ca51c", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Dashboard : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<WeddingWrapper>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/dash.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "202834e1d0b98e76a19d6b6e424a862aca1b21343983", async() => {
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "202834e1d0b98e76a19d6b6e424a862aca1b21344359", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n    <title>Dashboard</title>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "202834e1d0b98e76a19d6b6e424a862aca1b21346274", async() => {
                WriteLiteral(@"
    <div>
        <h1>Welcome to Wedding Planner</h1>
        <a href=""/logout"">Logout</a>
    </div>
    <div>
        <table>
            <tr>
                <td>Wedding</td>
                <td>Date</td>
                <td>Guest</td>
                <td>Action</td>
            </tr>
");
#nullable restore
#line 24 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
              foreach(Wedding wedding in Model.AllWeddings)
                {

#line default
#line hidden
#nullable disable
                WriteLiteral("                    <tr>\r\n                        <td><a");
                BeginWriteAttribute("href", " href=\"", 735, "\"", 770, 2);
                WriteAttributeValue("", 742, "/weddings/", 742, 10, true);
#nullable restore
#line 27 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 752, wedding.WeddingId, 752, 18, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(">");
#nullable restore
#line 27 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                                                              Write(wedding.WedderOne);

#line default
#line hidden
#nullable disable
                WriteLiteral(" & ");
#nullable restore
#line 27 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                                                                                   Write(wedding.WedderTwo);

#line default
#line hidden
#nullable disable
                WriteLiteral("</a></td>\r\n                        <td>");
#nullable restore
#line 28 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                       Write(wedding.Date.Value.ToString("MMM dd yyyy"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</td>\r\n                        <td>");
#nullable restore
#line 29 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                       Write(wedding.GuestsAttending.Count);

#line default
#line hidden
#nullable disable
                WriteLiteral("</td>\r\n");
#nullable restore
#line 30 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                            
                            if(wedding.UserId == Model.LoggedUser.UserId)
                            {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                <td><a");
                BeginWriteAttribute("href", " href=\"", 1139, "\"", 1179, 3);
                WriteAttributeValue("", 1146, "/weddings/", 1146, 10, true);
#nullable restore
#line 33 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 1156, wedding.WeddingId, 1156, 18, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 1174, "/edit", 1174, 5, true);
                EndWriteAttribute();
                WriteLiteral(">EDIT</a></td>\r\n");
#nullable restore
#line 34 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                            }
                            else if(wedding.GuestsAttending.Any(r => r.UserId == Model.LoggedUser.UserId))
                            {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                <td><a");
                BeginWriteAttribute("href", " href=\"", 1404, "\"", 1446, 3);
                WriteAttributeValue("", 1411, "/weddings/", 1411, 10, true);
#nullable restore
#line 37 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 1421, wedding.WeddingId, 1421, 18, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 1439, "/unrsvp", 1439, 7, true);
                EndWriteAttribute();
                WriteLiteral(">UN-RSVP</a></td>\r\n");
#nullable restore
#line 38 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                            }
                            else
                            {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                <td><a");
                BeginWriteAttribute("href", " href=\"", 1600, "\"", 1640, 3);
                WriteAttributeValue("", 1607, "/weddings/", 1607, 10, true);
#nullable restore
#line 41 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 1617, wedding.WeddingId, 1617, 18, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 1635, "/rsvp", 1635, 5, true);
                EndWriteAttribute();
                WriteLiteral(">RSVP</a></td>\r\n");
#nullable restore
#line 42 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                            }
                        

#line default
#line hidden
#nullable disable
                WriteLiteral("                    </tr>\r\n");
#nullable restore
#line 45 "C:\Users\javie\Desktop\CodingDojo\C#\ORM\WeddingPlanner\Views\Home\Dashboard.cshtml"
                }
            

#line default
#line hidden
#nullable disable
                WriteLiteral("        </table>\r\n    </div>\r\n    <div>\r\n        <a href=\"/weddings/new\">New Wedding</a>\r\n    </div>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<WeddingWrapper> Html { get; private set; }
    }
}
#pragma warning restore 1591