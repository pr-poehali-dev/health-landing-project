const Solution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Работаем с <span className="text-primary">первопричиной</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              На самом деле за внешними симптомами у каждого человека стоят СВОИ
              2-3 слабые зоны, которые требуют поддержки и внимания на
              протяжении всей жизни.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3"
                alt="Здоровая женщина"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Если мы находим эту ПЕРВОПРИЧИНУ и работаем с ней, то
                поддерживать все остальные системы в теле становится легко!
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Когда мы устраняем корень проблемы, тело начинает
                восстанавливаться само! Все системы начинают работать
                согласованно: кишечник, нервная система, иммунитет, гормональный
                фон.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Пример работы: Псориаз
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-red-600 mb-4">
                  ❌ Обычный подход
                </h4>
                <p className="text-gray-700 mb-4">
                  Гормональные мази, таблетки, иногда уколы. Они временно
                  убирают проявления, но симптомы возвращаются с удвоенной
                  силой.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary mb-4">
                  ✅ Наш подход
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Работа с микробиотой кишечника
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Индивидуальное питание против воспаления
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Работа с психосоматикой и стрессом
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Восстановление нервной системы
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl">
              <p className="text-lg text-gray-800 font-medium">
                <strong>Результат:</strong> Кожа очищается, симптомы беспокоят
                все реже. Гормональные мази больше не нужны. Уходят хроническая
                усталость и воспаление.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
