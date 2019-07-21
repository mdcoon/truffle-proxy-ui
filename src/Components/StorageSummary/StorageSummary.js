import React from 'react';

// see https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
class StorageSummary extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {

    const values = this.props.values || [1,2,3,4];

    const width = Math.floor(100 * (1 / values.length)) + '%';

    const blocks = values.map((value) => {
      const color = "blue";
      const height = '100%';
      return <div className="block" style={{width, height, color}}></div>
    });

    return (
      <div className="storage-summary">
      {blocks}
      </div>
    )

  }
}

export default StorageSummary;
