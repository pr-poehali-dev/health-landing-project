const Team = () => {
  const specialists = [
    {
      name: "Евгения Бабенко",
      specialization: "Нутрициолог, детокс-коуч, натуропат",
      education:
        "3 ступени сертификационной программы Holistic Nutrition & Detox Coaching",
      quote:
        "Верю в силу привычек для активного долголетия! Работаю с женщинами на всех этапах жизни.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Анастасия Федоровская",
      specialization: "Системный нутрициолог",
      education:
        "Курс «Аюрведическая медицина», Lab Geeks, Европейский Университет Долголетия",
      quote:
        "Объединяю аюрведу, функциональную медицину и современные нутрициологические подходы.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Светлана Фурсе",
      specialization: "Nutritional therapist, системный нутрициолог",
      education: "Рижский медицинский университет, Health science Academy UK",
      quote:
        "Вдохновляю женщин раскрыть потенциал здоровья и женственности в любом возрасте.",
      image:
        "https://images.unsplash.com/photo-1594824919066-28c6df18eb8f?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Нутрициологи команды
              <span className="text-primary block">Надежды Андреевой</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Наша команда — это объединение профессиональных нутрициологов с
              глубокой личной историей перехода к осознанному образу жизни.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {specialists.map((specialist, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {specialist.name}
                </h3>
                <p className="text-primary font-semibold text-center mb-4">
                  {specialist.specialization}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {specialist.education}
                </p>
                <blockquote className="text-gray-700 italic text-center">
                  "{specialist.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Чтобы максимально эффективно вам помочь:
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <p className="text-gray-700">
                  Все наставники проходят углублённое обучение по методикам
                  школы
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-gray-700">
                  Протоколы проходят финальную проверку лично Надеждой Андреевой
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <p className="text-gray-700">
                  Постоянно делимся опытом и ищем лучшие решения для каждого
                  клиента
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Получить личную поддержку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
