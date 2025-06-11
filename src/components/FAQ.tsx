const FAQ = () => {
  const faqs = [
    {
      question: "Как проходит ведение?",
      answer:
        "Вас ждет 100 дней индивидуального сопровождения: 3 консультации с нутрициологом, 3 консультации с врачом/коучем/психологом, комплексная диагностика, сопровождение в личном чате и индивидуальная книга здоровья.",
    },
    {
      question: "Кто будет моим куратором?",
      answer:
        "После оплаты вам на почту придет письмо от менеджера с инструкцией и именем назначенного куратора из команды нутрициологов Надежды Андреевой.",
    },
    {
      question: "Будет ли список анализов для сдачи?",
      answer:
        "Да, куратор направит вам подробный список анализов, которые необходимо будет сдать в ближайшее время после получения списка.",
    },
    {
      question: "Как будет проходить коммуникация с куратором?",
      answer:
        "Коммуникация проходит в личном чате, плюс у вас будут 6 видеоконсультаций (3 с нутрициологом + 3 с другими специалистами по потребности).",
    },
    {
      question: "Будет ли Надежда участвовать в ведении?",
      answer:
        "Все наставники проходят обучение у Надежды. Протоколы участников всегда проверяются и дорабатываются лично Надеждой Андреевой. Сложные случаи обсуждаются совместно.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Вопросы и <span className="text-primary">ответы</span>
            </h2>
            <p className="text-xl text-gray-700">
              Ответы на часто задаваемые вопросы о программе
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Остались вопросы? Запишитесь на бесплатную консультацию
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
