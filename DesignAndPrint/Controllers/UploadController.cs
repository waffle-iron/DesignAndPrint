﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DesignAndPrint.Controllers
{
    public class UploadController : Controller
    {
        // GET: Upload
        public ActionResult Async()
        {
            return View();
        }

        public ActionResult Save(IEnumerable<HttpPostedFileBase> files)
        {
            string physicalPath = "";
            var fileName = "";
            // The Name of the Upload component is "files"
            if (files != null)
            {
                foreach (var file in files)
                {
                    // Some browsers send file names with full path.
                    // We are only interested in the file name.
                    fileName = DateTime.UtcNow.ToString("yyyy-MM-dd-HH-mm-ss-fff",
                                            CultureInfo.InvariantCulture) + "." + file.FileName.Split('.')[1];
                    physicalPath = Path.Combine(Server.MapPath("~/Uploads"), fileName);

                    file.SaveAs(physicalPath);
                }
            }

            // Return an empty string to signify success
            return Json(new { status = "OK", filename= fileName, cutforall = false }, "text/plain");
        }

        public ActionResult SaveAll(IEnumerable<HttpPostedFileBase> filesforall)
        {
            string physicalPath = "";
            var fileName = "";
            // The Name of the Upload component is "files"
            if (filesforall != null)
            {
                foreach (var file in filesforall)
                {
                    // Some browsers send file names with full path.
                    // We are only interested in the file name.
                    fileName = DateTime.UtcNow.ToString("yyyy-MM-dd-HH-mm-ss-fff",
                                            CultureInfo.InvariantCulture) + "." + file.FileName.Split('.')[1];
                    physicalPath = Path.Combine(Server.MapPath("~/Uploads"), fileName);

                    file.SaveAs(physicalPath);
                }
            }

            // Return an empty string to signify success
            return Json(new { status = "OK", filename = fileName, cutforall=true }, "text/plain");
        }
        public ActionResult Remove(string[] fileNames)
        {
            // The parameter of the Remove action must be called "fileNames"

            if (fileNames != null)
            {
                foreach (var fullName in fileNames)
                {
                    var fileName = Path.GetFileName(fullName);
                    var physicalPath = Path.Combine(Server.MapPath("~/App_Data"), fileName);

                    // TODO: Verify user permissions

                    if (System.IO.File.Exists(physicalPath))
                    {
                        System.IO.File.Delete(physicalPath);
                    }
                }
            }

            // Return an empty string to signify success
            return Content("");
        }
    }

}