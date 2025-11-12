import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Material {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  icon: string;
}

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все материалы', icon: 'Library' },
    { id: 'lessons', name: 'Конспекты уроков', icon: 'BookOpen' },
    { id: 'films', name: 'Фильмы', icon: 'Film' },
    { id: 'music', name: 'Музыка', icon: 'Music' },
    { id: 'books-teacher', name: 'Книги для учителя', icon: 'BookMarked' },
    { id: 'books-student', name: 'Книги для учеников', icon: 'GraduationCap' },
    { id: 'edu-resources', name: 'Образовательные ресурсы', icon: 'School' },
    { id: 'videos', name: 'Видеоматериалы', icon: 'Video' },
    { id: 'links', name: 'Полезные ссылки', icon: 'Link' },
    { id: 'tools', name: 'Инструменты учителю', icon: 'Wrench' }
  ];

  const materials: Material[] = [
    {
      id: 1,
      title: 'Анализ романа "Война и мир"',
      category: 'lessons',
      date: '15 октября 2024',
      description: 'Подробный конспект урока по анализу эпопеи Л.Н. Толстого с методическими рекомендациями',
      icon: 'BookOpen'
    },
    {
      id: 2,
      title: '"Солярис" Тарковского',
      category: 'films',
      date: '12 ноября 2024',
      description: 'Анализ философской фантастики и способов её изучения на уроках литературы',
      icon: 'Film'
    },
    {
      id: 3,
      title: 'Романсы на стихи Цветаевой',
      category: 'music',
      date: '8 ноября 2024',
      description: 'Аудиоподборка музыкальных интерпретаций поэзии Марины Цветаевой',
      icon: 'Music'
    },
    {
      id: 4,
      title: 'Методика преподавания литературы',
      category: 'books-teacher',
      date: '5 ноября 2024',
      description: 'Учебное пособие по современным методам преподавания литературы в школе',
      icon: 'BookMarked'
    },
    {
      id: 5,
      title: '"Евгений Онегин" для старшеклассников',
      category: 'books-student',
      date: '2 ноября 2024',
      description: 'Издание с комментариями и историко-литературным контекстом для учеников',
      icon: 'GraduationCap'
    },
    {
      id: 6,
      title: 'Платформа "Российская электронная школа"',
      category: 'edu-resources',
      date: '30 октября 2024',
      description: 'Интерактивные уроки по всей школьной программе русского языка и литературы',
      icon: 'School'
    },
    {
      id: 7,
      title: 'Поэзия Серебряного века',
      category: 'videos',
      date: '25 октября 2024',
      description: 'Видеолекция о символизме и акмеизме с примерами произведений',
      icon: 'Video'
    },
    {
      id: 8,
      title: 'Национальный корпус русского языка',
      category: 'links',
      date: '20 октября 2024',
      description: 'Инструмент для поиска примеров употребления слов и конструкций',
      icon: 'Link'
    },
    {
      id: 9,
      title: 'Конструктор интерактивных заданий',
      category: 'tools',
      date: '18 октября 2024',
      description: 'Сервис для создания тестов, кроссвордов и викторин по литературе',
      icon: 'Wrench'
    },
    {
      id: 10,
      title: 'Подготовка к ЕГЭ по литературе',
      category: 'lessons',
      date: '10 октября 2024',
      description: 'Методические материалы и типовые задания с подробными разборами',
      icon: 'BookOpen'
    },
    {
      id: 11,
      title: '"Двенадцать стульев" экранизации',
      category: 'films',
      date: '5 октября 2024',
      description: 'Сравнительный анализ киноверсий романа Ильфа и Петрова',
      icon: 'Film'
    },
    {
      id: 12,
      title: 'Грамота.ру и другие словари',
      category: 'links',
      date: '1 октября 2024',
      description: 'Справочно-информационные порталы по русскому языку',
      icon: 'Link'
    },
    {
      id: 13,
      title: 'Классическая музыка в литературных произведениях',
      category: 'music',
      date: '28 сентября 2024',
      description: 'Подборка музыкальных произведений, упоминаемых в русской литературе XIX века',
      icon: 'Music'
    },
    {
      id: 14,
      title: 'Рабочие программы по ФГОС',
      category: 'books-teacher',
      date: '25 сентября 2024',
      description: 'Примеры рабочих программ по русскому языку и литературе',
      icon: 'BookMarked'
    },
    {
      id: 15,
      title: 'Хрестоматия по древнерусской литературе',
      category: 'books-student',
      date: '20 сентября 2024',
      description: 'Тексты для изучения литературы Древней Руси с комментариями',
      icon: 'GraduationCap'
    }
  ];

  const filteredMaterials = activeCategory === 'all' 
    ? materials 
    : materials.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center border-2 border-accent">
              <Icon name="BookMarked" size={28} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-serif text-primary">
                Педагогическая копилка
              </h1>
              <p className="text-sm text-muted-foreground font-body">
                Русский язык и литература
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 relative">
              <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full"></div>
              <h2 className="text-6xl font-bold font-serif text-primary relative leading-tight">
                Собрание учебных<br />материалов
              </h2>
            </div>
            <p className="text-xl text-muted-foreground font-body mt-6 leading-relaxed max-w-2xl mx-auto">
              Авторская коллекция конспектов, ресурсов и методических разработок 
              для учителей русского языка и литературы
            </p>
            <div className="flex gap-3 justify-center mt-8">
              <Button size="lg" className="font-serif text-lg shadow-lg hover:shadow-xl transition-all">
                <Icon name="Search" size={20} className="mr-2" />
                Поиск материалов
              </Button>
              <Button size="lg" variant="outline" className="font-serif text-lg">
                <Icon name="Star" size={20} className="mr-2" />
                Избранное
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 h-auto gap-2 bg-transparent p-0 mb-8">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md font-serif flex items-center gap-2 px-4 py-3 border border-border/50 rounded bg-card/50 hover:bg-card transition-all"
                >
                  <Icon name={cat.icon as any} size={18} />
                  <span className="hidden md:inline">{cat.name}</span>
                  <span className="md:hidden">{cat.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMaterials.map((material, index) => (
                  <Card 
                    key={material.id} 
                    className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center border border-accent/30 group-hover:bg-accent/20 transition-colors">
                          <Icon name={material.icon as any} size={24} className="text-primary" />
                        </div>
                        <Badge variant="outline" className="font-serif text-xs">
                          {material.date}
                        </Badge>
                      </div>
                      <CardTitle className="font-serif text-2xl leading-tight group-hover:text-accent transition-colors">
                        {material.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-body text-base leading-relaxed mb-4">
                        {material.description}
                      </CardDescription>
                      <Button variant="ghost" className="w-full font-serif group-hover:bg-accent/10">
                        Подробнее
                        <Icon name="ChevronRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-16">
            <Icon name="BookX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground font-serif">
              Материалы в этой категории пока не добавлены
            </p>
          </div>
        )}
      </main>

      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="BookMarked" size={24} className="text-primary" />
              <span className="font-serif text-lg">Педагогическая копилка</span>
            </div>
            <p className="text-sm text-muted-foreground font-body">
              © 2024 Все материалы предназначены для образовательных целей
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;