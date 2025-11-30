import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { scpObjects } from '@/data/scpData';

const Index = () => {
  const [activeSection, setActiveSection] = useState('objects');

  const factions = [
    {
      name: 'The Foundation',
      description: 'Основная организация по сдерживанию аномалий',
      motto: 'Secure. Contain. Protect.',
      personnel: '250,000+'
    },
    {
      name: 'Chaos Insurgency',
      description: 'Раскольническая группировка, использующая аномалии в своих целях',
      motto: 'Knowledge is Power',
      personnel: 'Unknown'
    },
    {
      name: 'Global Occult Coalition',
      description: 'Международная организация по уничтожению аномалий',
      motto: 'Destroy the Abnormal',
      personnel: '100,000+'
    },
    {
      name: 'Serpent\'s Hand',
      description: 'Группировка, выступающая за свободу аномалий',
      motto: 'Free the Caged',
      personnel: 'Decentralized'
    }
  ];

  const mtfUnits = [
    {
      designation: 'Alpha-1',
      name: '"Red Right Hand"',
      specialization: 'Личная оперативная группа O5 Council',
      status: 'Active'
    },
    {
      designation: 'Beta-7',
      name: '"Maz Hatters"',
      specialization: 'Биологические и химические угрозы',
      status: 'Active'
    },
    {
      designation: 'Epsilon-11',
      name: '"Nine-Tailed Fox"',
      specialization: 'Реагирование на прорывы содержания',
      status: 'Active'
    },
    {
      designation: 'Nu-7',
      name: '"Hammer Down"',
      specialization: 'Батальон для крупномасштабных операций',
      status: 'Active'
    }
  ];

  const forumThreads = [
    {
      title: 'Теория: Связь между SCP-001 и событием XK',
      author: 'Dr. Bright',
      replies: 47,
      views: 1203,
      lastActivity: '2 часа назад'
    },
    {
      title: 'Обсуждение: Самые жуткие объекты класса Keter',
      author: 'Agent Carter',
      replies: 89,
      views: 2456,
      lastActivity: '5 часов назад'
    },
    {
      title: 'Фанфик: История D-класса персонала #9341',
      author: 'Researcher Knox',
      replies: 23,
      views: 567,
      lastActivity: '1 день назад'
    },
    {
      title: 'Вопрос: Как Foundation финансируется?',
      author: 'NewReader42',
      replies: 156,
      views: 4321,
      lastActivity: '3 часа назад'
    }
  ];

  const getClassColor = (classType: string) => {
    switch (classType) {
      case 'Safe':
        return 'bg-green-900/40 text-green-400 border-green-800';
      case 'Euclid':
        return 'bg-yellow-900/40 text-yellow-400 border-yellow-800';
      case 'Keter':
        return 'bg-red-900/40 text-red-400 border-red-800';
      default:
        return 'bg-gray-900/40 text-gray-400 border-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary tracking-wider">SCP FOUNDATION</h1>
                <p className="text-xs text-muted-foreground">SECURE • CONTAIN • PROTECT</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                <Icon name="AlertTriangle" size={12} className="mr-1" />
                CLASSIFIED
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="bg-card border border-border p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-destructive/20 p-3 border border-destructive/50">
                <Icon name="AlertTriangle" size={32} className="text-destructive" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 text-foreground">БАЗА ДАННЫХ ФОНДА SCP</h2>
                <p className="text-muted-foreground mb-3">
                  Добро пожаловать в секретную базу данных аномальных объектов. 
                  Вся информация является строго конфиденциальной.
                </p>
                <p className="text-sm text-destructive font-mono">
                  [CLEARANCE LEVEL 3 REQUIRED] • [SESSION ACTIVE] • [MONITORING ENABLED]
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
            <TabsTrigger value="objects" className="data-[state=active]:bg-primary/20">
              <Icon name="FileText" size={16} className="mr-2" />
              SCP Объекты
            </TabsTrigger>
            <TabsTrigger value="factions" className="data-[state=active]:bg-primary/20">
              <Icon name="Users" size={16} className="mr-2" />
              Фракции
            </TabsTrigger>
            <TabsTrigger value="mtf" className="data-[state=active]:bg-primary/20">
              <Icon name="Shield" size={16} className="mr-2" />
              MTF Группы
            </TabsTrigger>
            <TabsTrigger value="forum" className="data-[state=active]:bg-primary/20">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Форум
            </TabsTrigger>
          </TabsList>

          <TabsContent value="objects" className="space-y-4 animate-slide-up">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {scpObjects.map((obj, index) => (
                <Link key={obj.id} to={`/scp/${obj.id}`}>
                  <Card 
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg font-mono text-primary">{obj.id}</CardTitle>
                        <Badge className={getClassColor(obj.class)}>
                          {obj.class}
                        </Badge>
                      </div>
                      <CardDescription className="text-base font-semibold text-foreground">
                        {obj.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{obj.description}</p>
                      <div className="flex items-center gap-2">
                        <Icon 
                          name="AlertCircle" 
                          size={16} 
                          className={
                            obj.threat === 'critical' ? 'text-red-500' :
                            obj.threat === 'high' ? 'text-orange-500' :
                            obj.threat === 'medium' ? 'text-yellow-500' :
                            'text-green-500'
                          } 
                        />
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">
                          Threat Level: {obj.threat}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="factions" className="space-y-4 animate-slide-up">
            <div className="grid gap-4 md:grid-cols-2">
              {factions.map((faction, index) => (
                <Card 
                  key={faction.name}
                  className="bg-card border-border hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Flag" size={20} className="text-primary" />
                      {faction.name}
                    </CardTitle>
                    <CardDescription className="text-sm italic text-primary/70">
                      "{faction.motto}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{faction.description}</p>
                    <Separator />
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Персонал:</span>
                      <span className="font-mono text-foreground">{faction.personnel}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mtf" className="space-y-4 animate-slide-up">
            <div className="grid gap-4 md:grid-cols-2">
              {mtfUnits.map((unit, index) => (
                <Card 
                  key={unit.designation}
                  className="bg-card border-border hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/20 p-2 border border-primary/50">
                        <Icon name="Shield" size={20} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base font-mono">{unit.designation}</CardTitle>
                        <CardDescription className="text-sm text-primary/80">
                          {unit.name}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{unit.specialization}</p>
                    <Separator />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-green-400 font-mono uppercase">{unit.status}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forum" className="space-y-4 animate-slide-up">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={20} className="text-primary" />
                    Форум сообщества
                  </CardTitle>
                  <Button size="sm" variant="outline">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новая тема
                  </Button>
                </div>
                <CardDescription>Обсуждения, теории и истории от фанатов SCP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {forumThreads.map((thread, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-muted/30 border border-border hover:border-primary/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {thread.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={12} />
                        {thread.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="MessageCircle" size={12} />
                        {thread.replies} ответов
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Eye" size={12} />
                        {thread.views} просмотров
                      </span>
                      <span className="ml-auto text-primary/60">{thread.lastActivity}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-primary" />
              <span className="font-mono">SCP Foundation © 2024</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs">CLASSIFIED DATABASE</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-xs">LEVEL 3 CLEARANCE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;