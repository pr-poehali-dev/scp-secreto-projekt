import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { scpObjects } from '@/data/scpData';

const SCPDetail = () => {
  const { id } = useParams<{ id: string }>();
  const scp = scpObjects.find(obj => obj.id === id);

  if (!scp) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Icon name="AlertTriangle" size={64} className="text-destructive mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-destructive mb-2">ОБЪЕКТ НЕ НАЙДЕН</h1>
          <p className="text-muted-foreground mb-6">Запрошенный SCP объект не существует в базе данных</p>
          <Link to="/">
            <Button variant="outline">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Вернуться к базе данных
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  База данных
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary tracking-wider">SCP FOUNDATION</h1>
                  <p className="text-xs text-muted-foreground">SECURE • CONTAIN • PROTECT</p>
                </div>
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

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="animate-fade-in space-y-6">
          <div className="bg-destructive/10 border-2 border-destructive/50 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold font-mono text-primary mb-2">{scp.id}</h1>
                <h2 className="text-2xl text-foreground font-semibold">{scp.title}</h2>
              </div>
              <Badge className={`${getClassColor(scp.class)} text-lg px-4 py-2`}>
                {scp.class}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div>
                <span className="text-muted-foreground">Дата обнаружения:</span>
                <p className="text-foreground font-mono">{scp.discoveryDate}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Местоположение:</span>
                <p className="text-foreground font-mono">{scp.location}</p>
              </div>
            </div>
          </div>

          <Card className="bg-card border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Icon name="Lock" size={24} className="text-primary" />
                ОСОБЫЕ ПРОЦЕДУРЫ СОДЕРЖАНИЯ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 border border-border p-4">
                <p className="text-foreground leading-relaxed">{scp.containmentProcedures}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Icon name="FileText" size={24} className="text-primary" />
                ОПИСАНИЕ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 border border-border p-4">
                <p className="text-foreground leading-relaxed whitespace-pre-line">{scp.fullDescription}</p>
              </div>
            </CardContent>
          </Card>

          {scp.specialNotes && scp.specialNotes.length > 0 && (
            <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="AlertCircle" size={24} className="text-destructive" />
                  ДОПОЛНИТЕЛЬНЫЕ ЗАМЕТКИ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {scp.specialNotes.map((note, index) => (
                    <div key={index} className="flex items-start gap-3 bg-muted/30 border border-border p-3">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground text-sm">{note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="bg-card border border-destructive/50 p-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-3">
              <Icon name="AlertTriangle" size={24} className="text-destructive" />
              <div>
                <p className="text-destructive font-bold text-sm">ПРЕДУПРЕЖДЕНИЕ</p>
                <p className="text-muted-foreground text-xs">
                  Несанкционированный доступ к данным объекта карается согласно протоколу безопасности Фонда
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Link to="/">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="ArrowLeft" size={20} />
                Вернуться к базе данных
              </Button>
            </Link>
          </div>
        </div>
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

export default SCPDetail;
