using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Entities;

namespace WebAPI.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context,UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "hodhod212",
                    Email = "hodhod212@test.com"
                };
                await userManager.CreateAsync(user, "Silikon_212");
                await userManager.AddToRoleAsync(user, "Member");
                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };
                await userManager.CreateAsync(admin, "Silikon_212");
                await userManager.AddToRolesAsync(admin,new[] { "Member","Admin" });
            }
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                   Name = "MSI Crosshair Rainbow Six Extraction edition 15.6 laptop for gaming",
                    Price = 2799000, Quantity = 20 ,PictureUrl = "/images/products/product_16393758296207a13ff28cb94f2c7567e589edf0c0.png",
                   Description="The MSI Crosshair Rainbow Six Extraction edition 15.6 laptop for gaming comes with a special Rainbow Six Extraction color scheme that gives your machine a unique look. The 165 Hz refresh rate delivers very smooth image transitions."
                    ,
                   Brand="MSI",Type="Laptop"
                },
                new Product
                {
                   Name = "MSI alpha 17 a4de-023ne",
                    Price = 1255400, Quantity = 6,
                    PictureUrl = "/images/products/product_1606361872db9d1d807e75b0f58f01eae5b3ded9fc.png" ,
                   Description="Screen size: 17.3 inches RAM: 16 GB Processor model: AMD Ryzen 5 4600H",
                   Brand="MSI",Type="Laptop"
                },
                new Product
                {
                    Name = "MSI Nightblade MI3 Desktop PC",
                     Price = 899000, Quantity = 3 ,
                     PictureUrl = "/images/products/product_4_20180409144850_5acb0cd2459a2.png",
                    Description="This MSI gaming desktop comes with the latest 8th Generation Intel® Core™ processors. Compared to its previous generation, the CPU multi-thread performance is 40% faster. 4K video playback with HDR visual quality is also significantly improved. So what does this mean for you? With these latest Intel processors, you can be totally immersed in full HD gaming, communicating with your teammates while live-streaming and capturing highlights for editing and posting later—all simultaneously and hassle-free!",
                    Brand="MSI",Type="Desktop"
                },
                new Product
                {
                   Name = "MacBook Pro", Price = 1999000, Quantity = 120
                   ,PictureUrl = "/images/products/screen_all_day__do6bv6lam4cy_large_2x.jpg",
                   Description="The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.",
                   Brand="Apple",Type="Laptop"
                },
                new Product
                {
                   Name = "MacBook Air", Price = 1250000, Quantity = 12,PictureUrl = "/images/products/retina_hero_screen__33bifaqqnv6e_large.jpg",
                   Description="With the Apple M1 chip, the MacBook Air has been completely redesigned. Up to 3.5 times faster processor, up to 5 times faster graphics processor and with Apple's most advanced Neural Engine for up to 9 times faster machine learning.",
                   Brand="Apple",Type="Laptop"
                },
                new Product
                {
                   Name = "iMac 27",
                    Price = 1799000, Quantity = 300,PictureUrl = "/images/products/imac27__evbw33241ouq_large.jpg",
                   Description="The 27‑inch iMac is packed with powerful tools and apps that let you take any idea to the next level. Its superfast processors and graphics, massive memory, and all-flash storage can tackle any workload with ease. And with its advanced audio and video capabilities and stunning 5K Retina display, everything you do is larger than life."
                   ,Brand="Apple",Type="Desktop"
                },
        
                new Product
                {
                   Name = "HP Omen 15-ek0023no 15.6 16GB 1TB SSD RTX2070 Super", Price = 1799000, Quantity = 300,
                   PictureUrl = "/images/products/hp-omen-15-ek0023no-156-16gb-1tb-ssd-rtx2070-super.webp",
                   Description="Powerful and elegant 15-inch gaming computer in HP's Omen series with fantastic design and backlit keyboard with four different zones with RGB colors and 26-key rollover. Incredible performance with the very powerful six-core Intel Core i7 processor and the super-powerful RTX 2070 gaming graphics card with 8GB video memory. The laptop has both fast and spacious repair with a 1 TB SSD hard drive.",
                   Brand="HP",Type="Laptop"
                },
                new Product
                {
                   Name = "HP EliteBook x360 1030 G8 358U9EA", Price = 2250000, Quantity = 300,
                   PictureUrl = "/images/products/hp-elitebook-x360-1030-g8-358u9ea.webp",
                   Description="Highly portable and lightweight 13.3-inch laptop equipped with Full HD IPS touch screen that can be turned 360 degrees so that the computer also works as a tablet. Excellent performance with quad-core Intel i7 processor and a fast 512 GB SSD hard drive for best performance. With the built-in 4G modem, you can easily insert a SIM card and use your computer with mobile broadband.",
                   Brand="HP",Type="Laptop"
                }                 
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}
