/**
 * Deploy `dist/` to S3 and optionally invalidate CloudFront.
 * Expects AWS CLI credentials in the environment (e.g. configure-aws-credentials in CI).
 */
import { execSync } from 'node:child_process'

const bucket = process.env.S3_BUCKET
const distributionId = process.env.CLOUDFRONT_ID

if (!bucket) {
  console.error('S3_BUCKET is required')
  process.exit(1)
}

execSync(`aws s3 sync dist/ s3://${bucket} --delete`, { stdio: 'inherit' })

if (distributionId) {
  execSync(
    `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`,
    { stdio: 'inherit' },
  )
}
