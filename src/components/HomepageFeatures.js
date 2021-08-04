import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '依赖注入',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          提供高性能的基于代理的远程调用能力，服务以接口为粒度，为开发者屏蔽远程调用底层细节。
      </>
    ),
  },
  {
    title: '领域抽象',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          遵循微内核+插件的设计原则，所有核心能力如Protocol、Transport、Serialization被设计为扩展点，平等对待内置实现和第三方实现。
      </>
    ),
  },
  {
    title: '属性绑定 + 自动配置',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          内置多种负载均衡策略，智能感知下游节点健康状况，显著减少调用延迟，提高系统吞吐量。
          支持多种注册中心服务，服务实例上下线实时感知。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
