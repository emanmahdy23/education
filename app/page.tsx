import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, BookOpen, Users, Award } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BookOpen className="h-6 w-6" />
          <span className="sr-only">الأكاديمية التعليمية</span>
          <span className="ml-2 text-lg font-bold">الأكاديمية التعليمية</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            المميزات
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            آراء الطلاب
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            تواصل معنا
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-48 xl:py-56 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                مستقبلك يبدأ هنا: تعلم، ابتكر، وتفوق
              </h1>
              <p className="text-lg md:text-xl">
                نقدم برامج تعليمية متقدمة لمساعدتك على تحقيق أهدافك الأكاديمية والمهنية.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
                >
                  <Link href="#contact">ابدأ رحلتك الآن</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold rounded-full bg-transparent"
                >
                  <Link href="#features">اكتشف برامجنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">لماذا تختار أكاديميتنا؟</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  نحن ملتزمون بتقديم تجربة تعليمية استثنائية تركز على التميز والابتكار.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">مناهج متطورة</CardTitle>
                <CardDescription>مناهجنا مصممة لتواكب أحدث التطورات العالمية وتلبي احتياجات سوق العمل.</CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">مدربون خبراء</CardTitle>
                <CardDescription>فريق من المدربين المؤهلين وذوي الخبرة العالية في مجالاتهم.</CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">شهادات معتمدة</CardTitle>
                <CardDescription>نقدم شهادات معتمدة تفتح لك أبواب الفرص الأكاديمية والمهنية.</CardDescription>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">ماذا يقول طلابنا؟</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  قصص نجاح حقيقية من طلابنا الذين حققوا أهدافهم معنا.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="صورة طالب" />
                    <AvatarFallback>طالب 1</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "تجربة تعليمية رائعة! المناهج شاملة والمدربون محترفون للغاية. لقد ساعدتني الأكاديمية على تحقيق
                    حلمي."
                  </p>
                  <div className="flex items-center justify-center text-yellow-500 mb-2">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="font-semibold text-lg">أحمد محمد</p>
                  <p className="text-sm text-gray-500">طالب سابق</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="صورة طالبة" />
                    <AvatarFallback>طالبة 2</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "أفضل قرار اتخذته في مسيرتي التعليمية. الدعم الأكاديمي ممتاز والبيئة محفزة جداً للتعلم والنمو."
                  </p>
                  <div className="flex items-center justify-center text-yellow-500 mb-2">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="font-semibold text-lg">فاطمة علي</p>
                  <p className="text-sm text-gray-500">طالبة حالية</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">جاهز للبدء؟</h2>
              <p className="text-lg md:text-xl">
                تواصل معنا اليوم لمعرفة المزيد عن برامجنا وكيف يمكننا مساعدتك في تحقيق أهدافك.
              </p>
              <Button
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
              >
                <Link href="mailto:info@example.com">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2025 الأكاديمية التعليمية. جميع الحقوق محفوظة.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            سياسة الخصوصية
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            الشروط والأحكام
          </Link>
        </nav>
      </footer>
    </div>
  )
}
