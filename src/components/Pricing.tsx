const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Инвестиция в ваше <span className="text-primary">здоровье</span>
            </h2>
            <p className="text-xl text-gray-700">
              Выберите формат, который подходит именно вам
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Консультация */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Консультация
              </h3>
              <p className="text-gray-700 mb-6">
                Расскажем, как проходит программа и ведение куратора, насколько
                она подойдет именно в вашей ситуации
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                Бесплатно
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold transition-colors">
                Записаться на консультацию
              </button>
            </div>

            {/* VIP тариф */}
            <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">VIP тариф</h3>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-white/80">✓</span>
                  <span className="text-sm">
                    Комплексная диагностика от наставника-нутрициолога
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white/80">✓</span>
                  <span className="text-sm">
                    3 консультации с наставником-нутрициологом
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white/80">✓</span>
                  <span className="text-sm">
                    3 консультации с врачом, коучем или психологом
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white/80">✓</span>
                  <span className="text-sm">
                    Индивидуальная книга здоровья с рекомендациями
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white/80">✓</span>
                  <span className="text-sm">
                    Мастер-классы, тренировки, медитации
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white/80">✓</span>
                  <span className="text-sm">
                    Мониторинг сна, питания и уровня глюкозы
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white/80">✓</span>
                  <span className="text-sm">
                    Сопровождение в личном чате 100 дней
                  </span>
                </div>
              </div>

              <div className="text-4xl font-bold mb-2">250 000 ₽</div>
              <p className="text-white/80 text-sm mb-8">
                При оплате зарубежной картой стоимость может увеличиться из-за
                конвертации валют
              </p>

              <button className="w-full bg-white text-primary hover:bg-gray-100 py-4 px-6 rounded-xl font-semibold transition-colors">
                Начать трансформацию
              </button>
            </div>
          </div>

          {/* Guarantee section */}
          <div className="mt-16 bg-secondary/20 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Можно продолжить жить так, как есть сейчас...
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Нервничать и переживать за свое здоровье, мириться с болями,
              расстраиваться из-за состояния кожи, волос, лишних килограммов.
            </p>
            <p className="text-xl font-semibold text-primary mb-8">
              А можно выстроить свою новую реальность, где вы здоровы,
              энергичны, отлично выглядите и наслаждаетесь жизнью.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-xl">
              Начать трансформацию своего здоровья и жизни
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
