"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Film, Camera, Palette, Clapperboard, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const scrollbarHideStyle = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`

export default function BelenevaCinemaLanding() {
  const scheduleData = [
    {
      day: "Понедельник",
      activities: [],
    },
    {
      day: "Вторник",
      activities: [
        {
          name: "Занятия по режиссуре",
          frequency: "(2 раза/мес.)",
          time: "",
        },
        {
          name: "Открытые лекции по цветокоррекции в кино",
          frequency: "(1 раз/мес.)",
          time: "",
        },
      ],
    },
    {
      day: "Среда",
      activities: [],
    },
    {
      day: "Четверг",
      activities: [
        {
          name: "Актерское мастерство",
          time: "17:00-19:00",
        },
        {
          name: "Режиссерско-актерская практика",
          time: "19:00-21:00",
        },
      ],
    },
    {
      day: "Пятница",
      activities: [],
    },
    {
      day: "Суббота",
      activities: [
        {
          name: "Вебинар по актерскому мастерству",
          time: "17:00-20:00",
        },
      ],
    },
    {
      day: "Воскресенье",
      activities: [
        {
          name: "Открытые лекции по операторскому мастерству",
          time: "17:00-19:00",
          frequency: "(с сентября по октябрь 2025)",
        },
      ],
    },
  ]

  const teachers = [
    {
      name: "Ирина Беленева",
      role: "Преподаватель режиссуры",
      bio: "Основатель киношколы, режиссер, сценарист, креативный директор. Училась в СПбГИК на кафедре документального кино и телефильма, во ВГИКЕ (маст. В.В.Меньшова, С.В.Урсуляка). Сняла ряд короткометражных картин, пилот сериала, документальный фильм о Дальнем Востоке «Замкадный барыш». Ведет режиссерско-актерскую мастерскую во Владивостоке, проводит открытые лекции по разбору кино.",
      image: "/images/dmitry-tishchenko.jpg",
    },
    {
      name: "Михаил Осташков",
      role: "Преподаватель актёрского мастерства",
      bio: 'Окончил актерский факультет ВГИКа (мастерская И. Н. Ясуловича, 2018-2022). После выпуска, совместно с режиссёром из ВГИКа основал независимый театр "Здесь". В труппу театра входят выпускники московских театральных ВУЗов. В театре начал разрабатывать свои методы репетиции, изучать разные - русские и зарубежные - техники актёрского мастерства. Имеет большой практический опыт работы с начинающими и профессиональными артистами. Снимается в кино. Михаила можно увидеть в таких работах, как: "Дети перемен", "Загляни ему в голову", "Балабол" и др.',
      image: "/images/mikhail-ostashkov.jpg",
    },
    {
      name: "Виталий Карпеченко",
      role: "Преподаватель актёрского мастерства",
      bio: "Выпускник ДВГАИ по специальности «Актерское искусство». Артист Драматического театра Тихоокеанского флота (2014-2017). Член «Союза театральных деятелей РФ» с 2017 года. Педагог-исследователь, аспирант ДВФУ по специальности «Искусствоведение». Студент РГИСИ (Санкт-Петербург) по специальности «Режиссёр театра кукол».",
      image: "/images/vitaly-karpechenko.jpg",
    },
    {
      name: "Мария Полос",
      role: "Преподаватель операторского мастерства",
      bio: 'Молодой и талантливый оператор-постановщик игрового и документального кино. Окончила СПбГИКиТ (мастерская Д.А. Долинина), а в 2019 году поступила в киношколу «Индустрия». В 2024 году вышел ее дебютный полнометражный фильм "В потоке трех стихий", который вошел в лонг-лист премии НИКА 2024. Также одна из известных работ Марии – сериал "#НЕПРОВИНЦИЯ" с ведущим Александром Цыпкиным, снятый для платформы OККО в жанре тревелдок. Фильмография: к/м «Черти» 2025, п/м «В потоке трех стихий» 2024, док. «Как дядя Витя в 70 лет планетарий построил» 2023, сериал «#Непровинция» 2022 и др.',
      image: "/images/maria-polos.jpg",
    },
    {
      name: "Дмитрий Тищенко",
      role: "Преподаватель цветокоррекции",
      bio: "Колорист, оператор-постановщик, преподаватель курса «Цветокоррекции DaVinci Resolve» в Петербургской школе нового кино. Выпускник мастерской операторов-постановщиков Александра Бурова. Более 11 лет занимается съемками, в качестве оператора-постановщика работал над полными и короткими метрами выпускников и студентов ШНК.",
      image: "/images/irina-beleneva.jpg",
    },
  ]

  const testimonials = [
    {
      text: "У меня на учебе есть тренинги актерские, но, во-первых, я на них не присутствую даже онлайн из-за разницы во времени, во-вторых, они чисто актерские (я была на таких вживую) и это вообще не то, что у нас происходит. Такой формат это прям огонь в огне!!! ❤️❤️❤️❤️",
      author: "Ксения",
      image: "/images/testimonial-1.png",
    },
    {
      text: "Ира, благодарю тебя за вот это вот всё! Шикарный интересный опыт. Совершенно другой - чудесный мир ❤️ Наверное, со второго занятия я решила для себя, что хожу к тебе как на психологические тренинги - тренирую Можность и свои задачи на данном этапе считаю выполненными, кроме того, формируются новые ❤️ И всех-всех обнимаю - спасибо, что вы есть. Это было волшебно",
      author: "Екатерина",
      image: "/images/testimonial-2.png",
    },
    {
      text: "У меня каждый раз мозг просто взрывается! 🔥 Спасибо за такие супер-полезные тренинги!!!!",
      author: "Ксения",
      image: "/images/testimonial-3.png",
    },
    {
      text: "Отличный воркшоп, всем рекомендую, полезно и для актеров, и режиссёров, особенно тем, кому не достаёт опыта и нужно в себе прощупать разные возможности + раскрепоститься в нужной среде",
      author: "Leon",
      image: "/images/testimonial-4.png",
    },
    {
      text: "Для меня последние 2 месяца, а так же все пол года, стали новым уровнем понимания происходящего на площадке и работе с артистами. Очень рад быть причастным и познакомиться со всеми! Если будут новые программы, прошу забронировать местечко, я там буду! 😁",
      author: "Сергей",
      image: "/images/testimonial-5.png",
    },
    {
      text: "Наконец-то перестал бояться публичных выступлений! Всю жизнь меня бросало в нескончаемый тремор при одной только мысли о том, что нужно будет произносить долгую речь на широкую публику. Прошел курс и что вы думаете? Я стою посреди огромной толпы людей на свадьбе своего лучшего друга и толкаю речь длительностью практически в 10 минут и… все меня слушают. Очень рекомендую!",
      author: "Максим",
      image: "/images/testimonial-6.png",
    },
  ]

  const handleTelegramClick = () => {
    window.open("https://t.me/BelenevaRa", "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <style jsx>{scrollbarHideStyle}</style>
      {/* Video noise effect */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur border-b border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
          <div className="flex items-center space-x-3">
            <Film className="h-6 w-6 text-red-700" />
            <span className="text-xl font-light tracking-wider text-white">BELENEVA CINEMA</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="#about"
              className="text-sm font-light text-gray-400 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              О курсе
            </Link>
            <Link
              href="#schedule"
              className="text-sm font-light text-gray-400 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              Расписание
            </Link>
            <Link
              href="#teachers"
              className="text-sm font-light text-gray-400 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              Преподаватели
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-light text-gray-400 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              Отзывы
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-light text-gray-400 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              Стоимость
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-400 hover:text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Button onClick={handleTelegramClick} className="bg-red-700 hover:bg-red-800 text-white border-0 font-light">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-slate-800 text-slate-300 border-slate-600 text-lg px-4 py-2 font-light"
              >
                Август - Октябрь 2025
              </Badge>
              <h1 className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">Режиссёрско-актёрский интенсив:</span>
                <br />
                <span className="text-red-700">создание первых фильмов</span>
              </h1>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  Актёр создаёт роль, режиссёр ищет форму, оператор ставит камеру — и начинается кино.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  В течение трёх месяцев режиссёры и актёры будут работать над созданием портретных фильмов. В курс
                  также войдут вебинары по операторскому мастерству и цветокоррекции в кино.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleTelegramClick}
                className="bg-red-700 hover:bg-red-800 text-lg px-6 sm:px-8 py-4 sm:py-6 font-light w-full sm:w-auto"
              >
                Записаться на курс
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleTelegramClick}
                className="text-lg px-6 sm:px-8 py-4 sm:py-6 border-red-700 text-red-700 hover:bg-red-700 hover:text-white bg-transparent font-light w-full sm:w-auto"
              >
                Узнать подробнее
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 font-light">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-red-700" />
                <span>3 месяца обучения</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-red-700" />
                <span>Малые группы</span>
              </div>
              <div className="flex items-center space-x-2">
                <Film className="h-4 w-4 text-red-700" />
                <span>Кино в портфолио</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl text-white">О курсе</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">Основные дисциплины</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center mb-4">
                  <Clapperboard className="h-6 w-6 text-red-700" />
                </div>
                <CardTitle className="text-red-700 text-xl font-light">Режиссура</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed font-light">
                  Изучаем выразительные средства кинематографа для обретения собственного стиля. Учимся работать с
                  актерами, с оператором-постановщиком, разрабатываем визуал, в основу которого ляжет содержание.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-700" />
                </div>
                <CardTitle className="text-red-700 text-xl font-light">Актёрское мастерство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed font-light">
                  Развитие актерских навыков, техника перевоплощения, работа над ролью, вербатим, наблюдение, работа с
                  режиссерами на площадке.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-red-700 mb-4">Дополнительные вебинары</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <div className="w-10 h-10 bg-red-700/20 rounded-lg flex items-center justify-center mb-3">
                  <Camera className="h-5 w-5 text-red-700" />
                </div>
                <CardTitle className="text-red-700 text-lg font-light">Операторское мастерство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm font-light">
                  Вебинары от приглашенного педагога из Москвы. Теоретическая база по свету, операторскому мастерству.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <div className="w-10 h-10 bg-red-700/20 rounded-lg flex items-center justify-center mb-3">
                  <Palette className="h-5 w-5 text-red-700" />
                </div>
                <CardTitle className="text-red-700 text-lg font-light">Цветокоррекция</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm font-light">
                  Вебинары от приглашенного педагога из Санкт-Петербурга.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl text-white">
              Расписание занятий
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Подробное расписание на три месяца обучения
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <table className="w-full border-collapse bg-gray-900 rounded-lg overflow-hidden mx-auto">
                  <thead>
                    <tr className="bg-gray-800">
                      {scheduleData.map((day, index) => (
                        <th
                          key={index}
                          className="px-4 py-3 text-left font-light text-white border-r border-gray-700 last:border-r-0"
                        >
                          {day.day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {scheduleData.map((day, index) => (
                        <td
                          key={index}
                          className="px-4 py-8 align-top border-r border-gray-700 last:border-r-0 min-h-[200px]"
                        >
                          <div className="space-y-4">
                            {day.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="text-sm">
                                <div className="text-white font-light mb-1">{activity.name}</div>
                                {activity.frequency && (
                                  <div className="text-gray-400 text-xs font-light">{activity.frequency}</div>
                                )}
                                {activity.time && (
                                  <div className="text-red-700 text-xs font-light">{activity.time}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-red-700 font-light mb-2">Важная информация:</p>
              <ul className="text-gray-300 space-y-1 font-light">
                <li>• Лекции по операторскому мастерству включены как бонусные занятия для режиссёров</li>
                <li>• Дополнительные лекции по цветокоррекции и операторскому мастерству оплачиваются отдельно</li>
                <li>• Точное время дополнительных занятий согласовывается с группой</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl text-white">
              Кто будет преподавать?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Наши преподаватели — выпускники ведущих киновузов России, активные деятели киноиндустрии с широкой
                практической базой. Это молодые профессионалы, которые ориентируются на современный кинорынок и идут в
                ногу со временем.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 text-white overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-red-700 text-lg font-light">{teacher.name}</CardTitle>
                  <CardDescription className="text-gray-400 font-light">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">{teacher.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl text-white">Отзывы учеников</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">Что говорят наши студенты о курсах</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-red-700 text-red-700" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed font-light mb-4">{testimonial.text}</p>
                  <p className="text-red-700 font-light text-sm">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-red-700 mb-4">Фотографии с занятий</h3>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/student-performance-1.jpg"
                    alt="Студентка на сцене"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image src="/images/classroom-1.jpg" alt="Занятие в классе" fill className="object-cover" />
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image src="/images/classroom-4.jpg" alt="Групповые упражнения" fill className="object-cover" />
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image src="/images/classroom-5.jpg" alt="Работа в парах" fill className="object-cover" />
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image src="/images/student-portrait.jpg" alt="Студент курса" fill className="object-cover" />
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image src="/images/group-photo.jpg" alt="Групповое фото студентов" fill className="object-cover" />
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/student-performance-2.jpg"
                    alt="Студентка в спектакле"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-60 lg:h-72 relative rounded-lg overflow-hidden">
                  <Image src="/images/classroom-2.jpg" alt="Лекция в аудитории" fill className="object-cover" />
                </div>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-4 font-light">
              Прокрутите горизонтально, чтобы увидеть больше фотографий с наших занятий
            </p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-red-700 mb-4">Видео с занятий</h3>
              <p className="text-gray-400 font-light">Посмотрите, как проходят наши уроки</p>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 relative rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      src="https://vkvideo.ru/video_ext.php?oid=-229224311&id=456239019&hd=1"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                      frameBorder="0"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                      title="Актерские упражнения"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <div className="bg-black/70 rounded px-2 py-1">
                      <p className="text-white text-xs font-light">Практические занятия по актерскому мастерству</p>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 relative rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      src="https://vkvideo.ru/video_ext.php?oid=-229224311&id=456239017&hd=1"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                      frameBorder="0"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                      title="Групповые этюды"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <div className="bg-black/70 rounded px-2 py-1">
                      <p className="text-white text-xs font-light">Студенты выполняют творческие задания</p>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 relative rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      src="https://vkvideo.ru/video_ext.php?oid=-229224311&id=456239018&hd=1"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                      frameBorder="0"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                      title="Режиссерская работа"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <div className="bg-black/70 rounded px-2 py-1">
                      <p className="text-white text-xs font-light">Работа режиссера с актерами на площадке</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-4 font-light">
              Прокрутите горизонтально, чтобы увидеть больше видео с наших занятий
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl text-white">
              Стоимость обучения
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Выберите подходящий тариф для вашего направления
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-700" />
                </div>
                <CardTitle className="text-2xl text-red-700 font-light">Актёрское мастерство</CardTitle>
                <CardDescription className="text-gray-400 font-light">Для актёров</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-light text-white">7 000 ₽</span>
                  <span className="text-gray-400 font-light">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="font-light">Вебинары по актёрскому мастерству</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="font-light">Практические занятия</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="font-light">Совместная практика с режиссёрами</span>
                  </div>
                </div>
                <Button onClick={handleTelegramClick} className="w-full bg-red-700 hover:bg-red-800 mt-6 font-light">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-700 border-2 text-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-700 text-white font-light">Популярный</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center mb-4">
                  <Film className="h-6 w-6 text-red-700" />
                </div>
                <CardTitle className="text-2xl text-red-700 font-light">Режиссура</CardTitle>
                <CardDescription className="text-gray-400 font-light">Для режиссёров</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-light text-white">8 000 ₽</span>
                  <span className="text-gray-400 font-light">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="font-light">Занятия по режиссуре</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="font-light">Практика с актёрами</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="text-red-700 font-light">Бонус: лекции по операторскому мастерству</span>
                  </div>
                </div>
                <Button onClick={handleTelegramClick} className="w-full bg-red-700 hover:bg-red-800 mt-6 font-light">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-red-700" />
                </div>
                <CardTitle className="text-2xl text-red-700 font-light">Дополнительные лекции</CardTitle>
                <CardDescription className="text-gray-400 font-light">
                  Операторское мастерство и цветокоррекция
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-light text-white">1 650 ₽</span>
                  <span className="text-gray-400 font-light">/участник</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="font-light">Лекции по операторскому мастерству</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="font-light">Лекции по цветокоррекции</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-400 font-light">
                      Для режиссёров лекции по операторскому мастерству идут как бонус
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={handleTelegramClick}
                  className="w-full border-red-700 text-red-700 hover:bg-red-700 hover:text-white mt-6 bg-transparent font-light"
                >
                  Добавить к курсу
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4 font-light">Итоговая стоимость за 3 месяца:</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <p className="text-2xl font-light text-white">21 000 ₽</p>
                <p className="text-gray-400 font-light">Актёрское мастерство</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-white">24 000 ₽</p>
                <p className="text-gray-400 font-light">Режиссура (с бонусом)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-red-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">Готовы создать кино?</h2>
            <p className="text-xl text-white/90 font-light">
              Присоединяйтесь к курсу BelenevaCinema и откройте для себя мир кинематографа. Количество мест ограничено.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleTelegramClick}
                className="text-lg px-8 py-6 bg-white text-red-700 hover:bg-gray-100 font-light"
              >
                Записаться на курс
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleTelegramClick}
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-red-700 bg-transparent font-light"
              >
                Задать вопрос
              </Button>
            </div>
            <p className="text-sm text-white/80 font-light">
              Курс стартует в августе 2025 года • Количество мест ограничено
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Film className="h-6 w-6 text-red-700" />
                <span className="text-xl font-light text-white">BELENEVA CINEMA</span>
              </div>
              <p className="text-gray-400 font-light">Первая киношкола во Владивостоке, идущая в ногу со временем.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-light text-red-700">Курсы</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Режиссура
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Актёрское мастерство
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Операторское мастерство
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Цветокоррекция
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-light text-red-700">Контакты</h3>
              <div className="space-y-2">
                <p className="text-gray-400 font-light">Email: BelenevaCinema@gmail.ru</p>
                <p className="text-gray-400 font-light">Адрес: г. Владивосток</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm font-light">© 2025 BelenevaCinema. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
