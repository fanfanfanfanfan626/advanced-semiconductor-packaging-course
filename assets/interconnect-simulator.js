(() => {
  const root = document.querySelector('[data-interconnect-simulator]');
  if (!root) return;

  const lanes = root.querySelector('[data-input="lanes"]');
  const rate = root.querySelector('[data-input="rate"]');
  const efficiency = root.querySelector('[data-input="efficiency"]');
  const length = root.querySelector('[data-input="length"]');

  const setText = (name, value) => {
    const target = root.querySelector(`[data-output="${name}"]`);
    if (target) target.textContent = value;
  };

  const setMeter = (name, value) => {
    const target = root.querySelector(`[data-meter="${name}"]`);
    if (target) target.style.width = `${Math.max(0, Math.min(100, value))}%`;
  };

  const update = () => {
    const laneCount = Number(lanes.value);
    const laneRate = Number(rate.value);
    const protocolEfficiency = Number(efficiency.value) / 100;
    const linkLength = Number(length.value);
    const rawGbps = laneCount * laneRate;
    const rawGBs = rawGbps / 8;
    const usefulGBs = rawGBs * protocolEfficiency;
    const relativeEnergy = linkLength / 20;

    setText('lanes-label', `${laneCount} 条`);
    setText('rate-label', `${laneRate} GT/s`);
    setText('efficiency-label', `${Number(efficiency.value)}%`);
    setText('length-label', `${linkLength} mm`);
    setText('raw-bandwidth', `${rawGBs.toFixed(0)} GB/s`);
    setText('useful-bandwidth', `${usefulGBs.toFixed(0)} GB/s`);
    setText('energy-index', `${relativeEnergy.toFixed(2)}×`);
    setMeter('raw-bandwidth', rawGBs / 40.96);
    setMeter('useful-bandwidth', usefulGBs / 40.96);
    setMeter('energy-index', relativeEnergy * 20);
  };

  [lanes, rate, efficiency, length].forEach((input) => input.addEventListener('input', update));
  update();
})();
