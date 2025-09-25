import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 'var(--space-3xl)',
          textAlign: 'center',
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-2xl)',
          margin: 'var(--space-lg)',
        }}>
          <div style={{
            fontSize: 'var(--text-4xl)',
            marginBottom: 'var(--space-lg)',
          }}>
            🚧
          </div>
          <h2 style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-md)',
          }}>
            Something went wrong
          </h2>
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-lg)',
          }}>
            Don't worry, I'm working on fixing this. Try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: 'var(--space-md) var(--space-lg)',
              background: 'var(--gradient-accent)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--text-base)',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'var(--transition-normal)',
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;