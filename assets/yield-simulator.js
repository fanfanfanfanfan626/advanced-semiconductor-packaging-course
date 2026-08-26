(() => {
  const root = document.querySelector('[data-yield-simulator]');
  if (!root) return;

  const area = root.querySelector('[data-input="area"]');
  const defects = root.querySelector('[data-input="defects"]');
  const count = root.querySelector('[data-input="count"]');
  const attach = root.querySelector('[data-input="attach"]');

  const setText = (name, value) => {
    const target = root.querySelector(`[data-output="${name}"]`);
    if (target) target.textContent = value;
  };

  const setMeter = (name, value) => {
    const target = root.querySelector(`[data-meter="${name}"]`);
    if (target) target.style.width = `${Math.max(0, Math.min(100, value))}%`;
  };

  const percent = (value) => `${(value * 100).toFixed(1)}%`;

  const update = () => {
    const totalAreaMm2 = Number(area.value);
    const defectDensity = Number(defects.value);
    const chipletCount = Number(count.value);
    const attachYield = Number(attach.value) / 100;
    const totalAreaCm2 = totalAreaMm2 / 100;
    const chipletAreaCm2 = totalAreaCm2 / chipletCount;

    const monolithicYield = Math.exp(-defectDensity * totalAreaCm2);
    const chipletYield = Math.exp(-defectDensity * chipletAreaCm2);
    const assemblySurvival = Math.pow(attachYield, chipletCount);
    const monoInput = 1 / monolithicYield;
    const chipletInput = 1 / chipletYield;

    setText('area-label', `${totalAreaMm2} mm²`);
    setText('defects-label', `${defectDensity.toFixed(2)} /cm²`);
    setText('count-label', `${chipletCount} 颗`);
    setText('attach-label', `${Number(attach.value).toFixed(1)}%`);
    setText('chiplet-area', `${(totalAreaMm2 / chipletCount).toFixed(0)} mm²`);
    setText('mono-yield', percent(monolithicYield));
    setText('chiplet-yield', percent(chipletYield));
    setText('assembly-yield', percent(assemblySurvival));
    setText('mono-input', `${monoInput.toFixed(2)}×`);
    setText('chiplet-input', `${chipletInput.toFixed(2)}×`);
    setMeter('mono-yield', monolithicYield * 100);
    setMeter('chiplet-yield', chipletYield * 100);
    setMeter('assembly-yield', assemblySurvival * 100);
  };

  [area, defects, count, attach].forEach((input) => input.addEventListener('input', update));
  update();
})();
