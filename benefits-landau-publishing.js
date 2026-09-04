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


  window.companyBenefits["landau-publishing"] =
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
            "landau-publishing-" +
            benefit.id,

          company:
            "landau-publishing"
        };

      });

})();
