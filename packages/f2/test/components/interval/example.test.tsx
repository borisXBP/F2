import { jsx } from '../../../src';
import { Polar, Rect } from '../../../src/coord';
import { Canvas, Chart } from '../../../src';
import { Interval, Axis, Legend, Tooltip } from '../../../src/components';
import { createContext, delay } from '../../util';

describe('柱图示例', () => {
  // 基础
  it('基础柱状图', async () => {
    const context = createContext('基础柱状图');
    const data = [
      {
        year: '1951 年',
        sales: 38,
      },
      {
        year: '1952 年',
        sales: 52,
      },
      {
        year: '1956 年',
        sales: 61,
      },
      {
        year: '1957 年',
        sales: 145,
      },
      {
        year: '1958 年',
        sales: 48,
      },
      {
        year: '1959 年',
        sales: 38,
      },
      {
        year: '1960 年',
        sales: 38,
      },
      {
        year: '1962 年',
        sales: 38,
      },
    ];
    const { props } = (
      <Canvas context={context} pixelRatio={1}>
        <Chart data={data}>
          <Axis field="year" />
          <Axis field="sales" />
          <Interval x="year" y="sales" />
        </Chart>
      </Canvas>
    );
    const canvas = new Canvas(props);
    canvas.render();

    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });
  it('区间柱状图', async () => {
    const context = createContext('区间柱状图');
    const data = [
      {
        x: '分类一',
        y: [76, 100],
      },
      {
        x: '分类二',
        y: [56, 108],
      },
      {
        x: '分类三',
        y: [38, 129],
      },
      {
        x: '分类四',
        y: [58, 155],
      },
      {
        x: '分类五',
        y: [45, 120],
      },
      {
        x: '分类六',
        y: [23, 99],
      },
      {
        x: '分类七',
        y: [18, 56],
      },
      {
        x: '分类八',
        y: [18, 34],
      },
    ];
    const { props } = (
      <Canvas context={context} pixelRatio={1}>
        <Chart data={data}>
          <Axis field="x" />
          <Axis field="y" />
          <Interval x="x" y="y" />
        </Chart>
      </Canvas>
    );
    const canvas = new Canvas(props);
    canvas.render();

    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });
  it('渐变色柱状图', async () => {
    const context = createContext('区间柱状图');
    const data = [
      {
        year: '2014 年',
        sales: 145,
        name: '1',
      },
      {
        year: '2015 年',
        sales: 121,
        name: '1',
      },
      {
        year: '2016 年',
        sales: 100,
        name: '1',
      },
      {
        year: '2017 年',
        sales: 97,
        name: '1',
      },
      {
        year: '2018 年',
        sales: 85,
        name: '1',
      },
    ];
    const { props } = (
      <Canvas context={context} pixelRatio={1}>
        <Chart data={data}>
          <Axis field="year" />
          <Axis field="sales" />
          <Interval x="year" y="sales" color="l(90) 0:#1890ff 1:#70cdd0" />
        </Chart>
      </Canvas>
    );
    const canvas = new Canvas(props);
    canvas.render();

    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });

  it('纹理柱状图', async () => {
    const context = createContext('纹理柱状图');
    const data = [
      {
        year: '1951 年',
        sales: 38,
      },
      {
        year: '1952 年',
        sales: 52,
      },
      {
        year: '1956 年',
        sales: 61,
      },
      {
        year: '1957 年',
        sales: 145,
      },
      {
        year: '1958 年',
        sales: 48,
      },
    ];

    const pattern = await new Promise((resolve) => {
      const img = new Image();
      img.src = 'https://gw.alipayobjects.com/zos/rmsportal/cNOctfQVgZmwaXeBITuD.jpg';
      img.onload = function() {
        const pattern = context.createPattern(img, 'repeat');
        resolve(pattern);
      };
    });

    const { props } = (
      <Canvas context={context} pixelRatio={1}>
        <Chart data={data}>
          <Axis field="year" />
          <Axis field="sales" />
          <Interval x="year" y="sales" color={pattern} />
        </Chart>
      </Canvas>
    );

    const canvas = new Canvas(props);
    canvas.render();

    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });
});
