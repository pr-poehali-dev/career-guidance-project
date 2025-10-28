import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const professions = [
  {
    id: 1,
    title: 'Врач',
    description: 'Помогает людям быть здоровыми',
    icon: 'Heart',
    skills: ['Внимательность', 'Ответственность', 'Знание биологии'],
    category: 'Медицина'
  },
  {
    id: 2,
    title: 'Учитель',
    description: 'Передаёт знания детям',
    icon: 'GraduationCap',
    skills: ['Терпение', 'Коммуникабельность', 'Любовь к детям'],
    category: 'Образование'
  },
  {
    id: 3,
    title: 'Инженер',
    description: 'Создаёт машины и механизмы',
    icon: 'Settings',
    skills: ['Логическое мышление', 'Математика', 'Креативность'],
    category: 'Техника'
  },
  {
    id: 4,
    title: 'Художник',
    description: 'Создаёт произведения искусства',
    icon: 'Palette',
    skills: ['Творческое мышление', 'Воображение', 'Усидчивость'],
    category: 'Искусство'
  },
  {
    id: 5,
    title: 'Программист',
    description: 'Разрабатывает компьютерные программы',
    icon: 'Code',
    skills: ['Логика', 'Внимательность', 'Усидчивость'],
    category: 'IT'
  },
  {
    id: 6,
    title: 'Повар',
    description: 'Готовит вкусную еду',
    icon: 'ChefHat',
    skills: ['Креативность', 'Аккуратность', 'Вкус'],
    category: 'Кулинария'
  }
];

const lessons = [
  {
    id: 1,
    title: 'Знакомство с профессиями',
    duration: '45 минут',
    grade: '1-2 класс',
    objectives: ['Узнать о разных профессиях', 'Понять их важность', 'Определить свои интересы']
  },
  {
    id: 2,
    title: 'Мир труда взрослых',
    duration: '45 минут',
    grade: '2-3 класс',
    objectives: ['Изучить рабочий день родителей', 'Понять связь профессий', 'Уважение к труду']
  },
  {
    id: 3,
    title: 'Профессии будущего',
    duration: '60 минут',
    grade: '3-4 класс',
    objectives: ['Узнать о новых профессиях', 'Технологии и труд', 'Планирование карьеры']
  }
];

const materials = [
  {
    title: 'Что такое профориентация?',
    content: 'Профориентация — это процесс помощи человеку в выборе профессии, соответствующей его интересам, способностям и личностным качествам. Для младших школьников это знакомство с миром профессий через игру и практику.'
  },
  {
    title: 'Зачем профориентация в начальной школе?',
    content: 'Ранняя профориентация помогает детям: расширить кругозор о профессиях, развить интерес к труду взрослых, понять связь школьных предметов с реальной жизнью, начать формировать представление о своих способностях.'
  },
  {
    title: 'Методы работы',
    content: 'Основные методы профориентационной работы с младшими школьниками: игровые занятия, экскурсии на предприятия, встречи с представителями профессий, творческие проекты, профориентационные викторины и конкурсы.'
  },
  {
    title: 'Возрастные особенности',
    content: '6-10 лет — это возраст активного познания мира. Дети интересуются профессиями родителей, героев мультфильмов. Важно использовать наглядность, игровые формы, давать возможность попробовать себя в разных ролях.'
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <Icon name="Compass" size={28} className="text-primary" />
            <h1 className="text-xl font-bold">Профориентация младших школьников</h1>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home" className="gap-2">
              <Icon name="Home" size={16} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="professions" className="gap-2">
              <Icon name="Briefcase" size={16} />
              Профессии
            </TabsTrigger>
            <TabsTrigger value="lessons" className="gap-2">
              <Icon name="BookOpen" size={16} />
              Занятия
            </TabsTrigger>
            <TabsTrigger value="materials" className="gap-2">
              <Icon name="FileText" size={16} />
              Материалы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-8">
            <section className="text-center space-y-4 py-12">
              <h2 className="text-4xl font-bold tracking-tight">
                Внеурочная деятельность по профориентации
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Комплексная программа профориентационных занятий для учащихся начальной школы. 
                Помогаем детям познакомиться с миром профессий через интересные занятия и практику.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => setActiveTab('professions')}>
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Изучить профессии
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveTab('lessons')}>
                  <Icon name="CalendarDays" size={20} className="mr-2" />
                  Планы занятий
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Цели программы</CardTitle>
                  <CardDescription>
                    Формирование у младших школьников представлений о мире профессий и труда взрослых
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-2">
                    <Icon name="Users" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Для кого</CardTitle>
                  <CardDescription>
                    Учащиеся 1-4 классов начальной школы. Программа адаптируется под возраст и уровень развития
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Icon name="Trophy" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Результаты</CardTitle>
                  <CardDescription>
                    Расширение кругозора, развитие интереса к профессиям, понимание своих способностей
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6">Ключевые направления</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Lightbulb" size={20} className="text-primary" />
                      Познавательная деятельность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Знакомство с различными профессиями через рассказы, видео, экскурсии. 
                      Изучение истории профессий и их роли в обществе.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Gamepad2" size={20} className="text-secondary" />
                      Игровая деятельность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Сюжетно-ролевые игры, профориентационные викторины, квесты. 
                      Моделирование профессиональных ситуаций.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Sparkles" size={20} className="text-accent" />
                      Творческая деятельность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Рисование профессий, создание проектов, поделок. 
                      Сочинения и презентации о профессиях родителей.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                      Коммуникативная деятельность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Встречи с представителями профессий, интервью, обсуждения. 
                      Развитие навыков общения и работы в команде.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="professions" className="space-y-6">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-bold">Мир профессий</h2>
              <p className="text-muted-foreground">
                Познакомьтесь с различными профессиями и узнайте, какие навыки для них необходимы
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professions.map((profession) => (
                <Card key={profession.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={profession.icon as any} size={32} className="text-white" />
                    </div>
                    <Badge className="w-fit mb-2">{profession.category}</Badge>
                    <CardTitle>{profession.title}</CardTitle>
                    <CardDescription>{profession.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Необходимые навыки:</p>
                      <div className="flex flex-wrap gap-2">
                        {profession.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lessons" className="space-y-6">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-bold">Планы занятий</h2>
              <p className="text-muted-foreground">
                Структурированные программы профориентационных занятий для разных классов
              </p>
            </div>

            <div className="grid gap-6">
              {lessons.map((lesson) => (
                <Card key={lesson.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {lesson.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="School" size={14} />
                            {lesson.grade}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary">Занятие {lesson.id}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold">Цели занятия:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {lesson.objectives.map((objective, idx) => (
                          <li key={idx}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={20} />
                  Структура занятия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-semibold">Введение</h4>
                    <p className="text-sm text-muted-foreground">Мотивация и постановка целей</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-semibold">Основная часть</h4>
                    <p className="text-sm text-muted-foreground">Изучение нового материала</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-semibold">Практика</h4>
                    <p className="text-sm text-muted-foreground">Игры и упражнения</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-semibold">Рефлексия</h4>
                    <p className="text-sm text-muted-foreground">Обсуждение и выводы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-bold">Теоретические материалы</h2>
              <p className="text-muted-foreground">
                Основы профориентационной работы с младшими школьниками
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {materials.map((material, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {material.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {material.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card>
              <CardHeader>
                <CardTitle>Принципы работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Систематичность</h4>
                      <p className="text-sm text-muted-foreground">
                        Регулярные занятия в течение учебного года
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Наглядность</h4>
                      <p className="text-sm text-muted-foreground">
                        Использование видео, картинок, реальных примеров
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Доступность</h4>
                      <p className="text-sm text-muted-foreground">
                        Материал соответствует возрасту детей
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Активность</h4>
                      <p className="text-sm text-muted-foreground">
                        Дети активно участвуют в занятиях
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Связь с жизнью</h4>
                      <p className="text-sm text-muted-foreground">
                        Знания применимы в реальной жизни
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Индивидуальный подход</h4>
                      <p className="text-sm text-muted-foreground">
                        Учёт особенностей каждого ребёнка
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Library" size={20} />
                  Рекомендуемая литература
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="BookOpen" size={16} className="flex-shrink-0 mt-0.5" />
                    <span>Климов Е.А. "Как выбирать профессию" — классика профориентации</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="BookOpen" size={16} className="flex-shrink-0 mt-0.5" />
                    <span>Пряжников Н.С. "Профориентация в школе" — методическое пособие</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="BookOpen" size={16} className="flex-shrink-0 mt-0.5" />
                    <span>Резапкина Г.В. "Я и моя профессия" — программа для школьников</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-12 py-8 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Образовательная платформа по профориентации младших школьников</p>
          <p className="mt-2">Внеурочная деятельность • 1-4 классы • 2024-2025 учебный год</p>
        </div>
      </footer>
    </div>
  );
}
