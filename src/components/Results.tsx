const Results = () => {
  const results = [
    {
      id: 1,
      name: "Галина, 62 года",
      beforeImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=face",
      afterImage:
        "https://images.unsplash.com/photo-1494790108755-2616c96ce29d?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=face",
      quote:
        "Ментальное состояние выросло с 2 на 8, физическая энергия с 4 до 9, вес снизился с 76 до 73 кг, ушла экзема",
      details:
        "Энергия, концентрация, подвижность суставов, качественный сон без пробуждений",
    },
    {
      id: 2,
      name: "Елена, 37 лет",
      beforeImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=face",
      afterImage:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=face",
      quote:
        "Теперь я знаю, что состояние радости и счастья — это то, в котором можно ВСЕ ВРЕМЯ жить",
      details:
        "Эмоциональная стабильность, качественный сон, баланс настроения",
    },
    {
      id: 3,
      name: "Ирина, 44 года",
      beforeImage:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=face",
      afterImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=face",
      quote:
        "Вес снизился на 10 кг, уменьшились симптомы ПМС, ушла отечность. Чувствую себя уверенной и красивой женщиной",
      details: "Нормализация веса, гормональный баланс, повышение энергии",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Результаты наших <span className="text-primary">клиенток</span>
            </h2>
            <p className="text-xl text-gray-700">
              Реальные истории трансформации здоровья и жизни
            </p>
          </div>

          <div className="space-y-16">
            {results.map((result, index) => (
              <div
                key={result.id}
                className="bg-gray-50 rounded-2xl p-8 lg:p-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-600 mb-2">
                          До
                        </p>
                        <img
                          src={result.beforeImage}
                          alt="До"
                          className="w-24 h-24 rounded-full object-cover mx-auto grayscale"
                        />
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-2">
                          <span className="text-white text-sm">→</span>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-sm font-medium text-primary mb-2">
                          После
                        </p>
                        <img
                          src={result.afterImage}
                          alt="После"
                          className="w-24 h-24 rounded-full object-cover mx-auto"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {result.name}
                    </h3>
                    <blockquote className="text-xl text-gray-800 italic mb-4 border-l-4 border-primary pl-4">
                      "{result.quote}"
                    </blockquote>
                    <p className="text-lg text-gray-700">{result.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-secondary/20 p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                В результате вы не только улучшите свое здоровье, но и сможете:
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <p className="text-lg text-gray-700">
                    Почувствовать себя живой и наполненной, вернуть блеск в
                    глазах
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💪</span>
                  <p className="text-lg text-gray-700">
                    Оставаться в ресурсе в любых ситуациях
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧠</span>
                  <p className="text-lg text-gray-700">
                    Познать свой организм и выстроить с телом партнерские
                    отношения
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <p className="text-lg text-gray-700">
                    Привести все системы в состояние гармонии
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
