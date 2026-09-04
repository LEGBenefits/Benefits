(function () {

  window.companyBenefits =
    window.companyBenefits || {};

  const baseBenefits =
    window.companyBenefits["landau-school"] || [];


  const excludedBenefits = [
    "Qala Tibbi Sığorta",
    "Təhsil haqqına güzəşt",
    "Push30",
    "Cassa",
    "Maliyyə dəstəyi",
    "3 günlük icazə"
  ];


  window.companyBenefits["bani"] =
    baseBenefits

      .filter(function (benefit) {

        return !excludedBenefits.includes(
          benefit.name
        );

      })

      .map(function (benefit) {

        return {
          ...benefit,

          id:
            "bani-" +
            benefit.id,

          company:
            "bani"
        };

      });

})();
