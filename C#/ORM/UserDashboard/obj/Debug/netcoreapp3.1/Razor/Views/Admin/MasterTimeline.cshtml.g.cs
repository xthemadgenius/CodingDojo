#pragma checksum "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "34820fe5dc3ac9ce44a5369987d407f71c5d8531"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(MyApp.Namespace.Admin.Views_Admin_MasterTimeline), @"mvc.1.0.view", @"/Views/Admin/MasterTimeline.cshtml")]
namespace MyApp.Namespace.Admin
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
#line 1 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
using UserDashboard.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"34820fe5dc3ac9ce44a5369987d407f71c5d8531", @"/Views/Admin/MasterTimeline.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fc1d1eb37dc6f0d82250bf784d7ea6a0b75ca51c", @"/Views/_ViewImports.cshtml")]
    public class Views_Admin_MasterTimeline : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<NotificationWrapper>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/timeline.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/navbar.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "MakeMsg", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-controller", "Normal", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "POST", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("comment"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "MakeCmt", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "34820fe5dc3ac9ce44a5369987d407f71c5d85316215", async() => {
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>The Wall</title>\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "34820fe5dc3ac9ce44a5369987d407f71c5d85316622", async() => {
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
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "34820fe5dc3ac9ce44a5369987d407f71c5d85317801", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "34820fe5dc3ac9ce44a5369987d407f71c5d85319684", async() => {
                WriteLiteral(@"
    <header>
        <nav>
            <ul>
                <li><a href=""/dashManager"">Dashboard</a></li>
                <li><a href=""/master/1"">Profile</a></li>
            </ul>
        </nav>
        <div class=""move-right"">
            <a href=""/logout"">Logout</a>
        </div>
    </header>
    <main>
        <div>
            <div>
                <h1>");
#nullable restore
#line 27 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
               Write(Model.Users.FirstName);

#line default
#line hidden
#nullable disable
                WriteLiteral(" ");
#nullable restore
#line 27 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                      Write(Model.Users.LastName);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h1>\r\n                <h3>");
#nullable restore
#line 28 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
               Write(Model.Users.CreatedAt.ToString("MMMM dd, yyyy"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</h3>\r\n                <h3>User ID: ");
#nullable restore
#line 29 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                        Write(Model.Users.UserId);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h3>\r\n                <h3>Email: ");
#nullable restore
#line 30 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                      Write(Model.Users.Email);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h3>\r\n                <h3>Description: ");
#nullable restore
#line 31 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                            Write(Model.Users.Description);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h3>\r\n            </div>\r\n            <br>\r\n            <div>\r\n                ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "34820fe5dc3ac9ce44a5369987d407f71c5d853112137", async() => {
                    WriteLiteral(@"
                    <h3>Post A Message</h3>
                    <div>
                        <textarea name=""MsgContent"" id=""MsgContent"" cols=""50"" rows=""10""></textarea>
                    </div>
                    <input type=""submit"">
                ");
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Action = (string)__tagHelperAttribute_3.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Controller = (string)__tagHelperAttribute_4.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_5.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n            </div>\r\n            <br>\r\n            <div>\r\n");
#nullable restore
#line 45 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                  foreach(Message post in Model.AllMessages)
                    {

#line default
#line hidden
#nullable disable
                WriteLiteral("                        <div class=\"message\">\r\n                            <h3><a");
                BeginWriteAttribute("href", " href=\"", 1663, "\"", 1700, 2);
                WriteAttributeValue("", 1670, "/timeline/", 1670, 10, true);
#nullable restore
#line 48 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
WriteAttributeValue("", 1680, post.Creator.UserId, 1680, 20, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(">");
#nullable restore
#line 48 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                                                    Write(post.Creator.FirstName);

#line default
#line hidden
#nullable disable
                WriteLiteral(" ");
#nullable restore
#line 48 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                                                                            Write(post.Creator.LastName);

#line default
#line hidden
#nullable disable
                WriteLiteral("</a>  - ");
#nullable restore
#line 48 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                                                                                                          Write(post.UpdatedAt);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h3>\r\n                            <p>");
#nullable restore
#line 49 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                          Write(post.MsgContent);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n");
#nullable restore
#line 50 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                             foreach(Comment reply in post.Comments)
                            {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                <div class=\"comment\">\r\n                                    <h4><a");
                BeginWriteAttribute("href", " href=\"", 2029, "\"", 2064, 2);
                WriteAttributeValue("", 2036, "/timeline/", 2036, 10, true);
#nullable restore
#line 53 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
WriteAttributeValue("", 2046, reply.User.UserId, 2046, 18, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(">");
#nullable restore
#line 53 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                                                          Write(reply.User.FirstName);

#line default
#line hidden
#nullable disable
                WriteLiteral(" ");
#nullable restore
#line 53 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                                                                                Write(reply.User.LastName);

#line default
#line hidden
#nullable disable
                WriteLiteral("</a> - ");
#nullable restore
#line 53 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                                                                                                           Write(reply.UpdatedAt);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h4>\r\n                                    <p>");
#nullable restore
#line 54 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                  Write(reply.ComContent);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n                                </div>\r\n");
#nullable restore
#line 56 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                            }

#line default
#line hidden
#nullable disable
                WriteLiteral("                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "34820fe5dc3ac9ce44a5369987d407f71c5d853119039", async() => {
                    WriteLiteral(@"
                                <h5>Post A Comment</h5>
                                <div>
                                    <textarea name=""ComContent"" id=""ComContent"" cols=""40"" rows=""5""></textarea>
                                </div>
                                <input type=""submit"">
                            ");
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Action = (string)__tagHelperAttribute_7.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_7);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Controller = (string)__tagHelperAttribute_4.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_5.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
                if (__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.RouteValues == null)
                {
                    throw new InvalidOperationException(InvalidTagHelperIndexerAssignment("asp-route-MessageId", "Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper", "RouteValues"));
                }
                BeginWriteTagHelperAttribute();
#nullable restore
#line 57 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                                                                                                                      WriteLiteral(post.MessageId);

#line default
#line hidden
#nullable disable
                __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.RouteValues["MessageId"] = __tagHelperStringValueBuffer;
                __tagHelperExecutionContext.AddTagHelperAttribute("asp-route-MessageId", __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.RouteValues["MessageId"], global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n                        </div>\r\n                        <hr>\r\n");
#nullable restore
#line 66 "C:\Users\javie\Desktop\CodingDOjo\C#\ORM\UserDashboard\Views\Admin\MasterTimeline.cshtml"
                    }
                

#line default
#line hidden
#nullable disable
                WriteLiteral("            </div>\r\n        </div>\r\n    </main>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<NotificationWrapper> Html { get; private set; }
    }
}
#pragma warning restore 1591
