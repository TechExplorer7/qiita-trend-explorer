# qiita-pick-be

Qiita から各ジャンルの人気の記事をピックアップする

## 使用予定技術

- Node.js
- Express
- Sequelize

## Qiita API

[Qiita API v2 ドキュメント](https://qiita.com/api/v2/docs)

利用制限

- 認証している状態ではユーザーごとに1時間に1000回まで
- 認証していない状態ではIPアドレスごとに1時間に60回まで

## TODO

- Sequelize でテーブル作成
- Sequelize に API で取得したデータを登録
- Jest を追加してテストコード実装
- husky を追加
- eslint を追加
- scriptsの定期実行はnode-cronを利用する
