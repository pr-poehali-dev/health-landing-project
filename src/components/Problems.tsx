const Problems = () => {
  const problems = [
    "все чаще возникает усталость, трудно концентрироваться на задачах, нет сил справляться с текущими задачами как маме, жене, сотруднику — не говоря уже о своих проектах",
    "женский цикл проходит болезненно, нерегулярно, с большой кровопотерей, появились кисты, полипы, миомы, мастопатия",
    "вы перестали полноценно спать, просыпаетесь несколько раз за ночь, восстановить силы не получается",
    "начали чувствоваться и болеть суставы, снизился тонус мышц, исчезла легкость и удовольствие от движения",
    "волосы стали ломкими и выпадают, появилась ранняя седина",
    "замечаете на коже высыпания, папиломы или красные точки",
    "лишний вес растет и не уходит даже на диете, вас часто тянет на сладкое",
    "запоры и вздутия, молочница мешают вам жить полной жизнью",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
            Сигналы <span className="text-red-600">SOS</span> от организма
            выглядят так:
          </h2>

          <div className="grid gap-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              Отодвигая самочувствие и здоровье на задний план, мы усугубляем
              болезни и дисбалансы, вместо того, чтобы себя{" "}
              <strong>ПОДДЕРЖИВАТЬ</strong>. И чем дольше мы откладываем, тем
              больше теряем финансово, ведь запущенная проблема потребует
              намного больших усилий и затрат на восстановление.
            </p>

            <div className="bg-secondary/20 p-6 rounded-xl mb-6">
              <p className="text-2xl font-semibold text-primary mb-2">
                🤨 Может, пришла пора нового решения:
              </p>
              <p className="text-xl font-medium text-gray-800">
                "Сначала я и мое здоровье, а потом вот это все!"
              </p>
            </div>

            <div className="text-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Да, мое здоровье важнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
