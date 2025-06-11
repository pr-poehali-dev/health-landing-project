import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Индивидуальная программа
            <span className="text-primary block mt-2">сопровождения</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-gray-700 mb-8">
            Трансформация здоровья за 100 дней: личное ведение нутрициологами
            Надежды Андреевой
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-600 mb-6 font-medium">
              Самый эффективный способ:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Разобраться в первопричинах своих проблем по здоровью
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Получить личные рекомендации от нутрициолога, врача, коуча,
                  психолога
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Внедрить новые привычки — уверенно, с пониманием: что и зачем
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Ощутимо улучшить свое здоровье, самочувствие и качество жизни
                </p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Узнать подробнее
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
