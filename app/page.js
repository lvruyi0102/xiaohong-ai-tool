export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-2">AI 小红书文案生成器</h1>
        <p className="text-center text-gray-600 mb-8">输入你的主题，一键生成高点击小红书笔记标题、正文结构与标签</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="例如：夏日穿搭分享"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button
            type="button"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg transition"
          >
            生成文案
          </button>
        </form>
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="font-semibold mb-2">生成结果将显示在这里</h2>
          <p className="text-sm text-gray-500">（当前为MVP版本，完整AI生成功能即将上线）</p>
        </div>
      </div>
    </main>
  );
}
