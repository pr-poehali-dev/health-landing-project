const Program = () => {
  const features = [
    {
      title: "6 подробных видеоконсультаций",
      description:
        "3 основных консультации с нутрициологом + 3 дополнительных с врачом, коучем или психологом",
      icon: "🎥",
    },
    {
      title: "Комплексная диагностика",
      description:
        "Разбор анализов, оценка гормонального фона, анализ микробиоты кишечника",
      icon: "🔬",
    },
    {
      title: "Индивидуальный план действий",
      description:
        "Детализированный отчет с планом питания, БАДами, тренировками и практиками",
      icon: "📋",
    },
    {
      title: "Сопровождение «за руку»",
      description:
        "100 дней поддержки в личном чате с корректировкой плана и ответами на вопросы",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Программа индивидуального
              <span className="text-primary block">сопровождения</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              «Трансформация здоровья за 100 дней» — система восстановления
              организма, основанная на научном подходе, мудрости Аюрведы и
              индивидуальном внимании к особенностям вашего организма.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Что входит в диагностику?
            </h3>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🩸</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Анализы крови
                </h4>
                <p className="text-gray-700">
                  Общий анализ, маркеры воспаления, функция печени, витамин D,
                  щитовидная железа
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Гормональный фон
                </h4>
                <p className="text-gray-700">
                  Кортизол, DHEA, эстрадиол, тестостерон, прогестерон, гормоны
                  щитовидной железы
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦠</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Микробиота
                </h4>
                <p className="text-gray-700">
                  Состав микробиоты, маркеры воспаления, кишечная проницаемость
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              А дальше?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
